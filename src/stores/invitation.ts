import {
  getAllInvitationByKeywords,
  getAllInvitationByUserIdAndPagenum,
  getAllInvitationByUserPosted,
  starOrUnstarInvitation,
  updateInvitationById,
} from './../request/api/invitation/index'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

import {
  createInvitation,
  getAllInvitation,
  getAllStarredInvitation,
  getInvitationByTag,
  getOneInvitation,
  starredInvitation,
} from '@/request/api/invitation'
import type {
  ILikes,
  Invitation,
  InvitationInfo,
  InvitationSearch,
} from '@/request/api/invitation/types'

export const useInvitationStore = defineStore('invitationStore', {
  state: () => {
    return {
      invitationList: <InvitationInfo[]>[],
      postedInvitationList: <InvitationInfo[]>[],
      totalNum: 0,
      invitationInfo: <InvitationInfo>{},
      otherInvitation: <InvitationInfo[]>[],
      invitationListByTag: <InvitationInfo[]>[],
      starredList: <ILikes[]>[],
      invitationSearchList: <InvitationSearch[]>[],
    }
  },
  actions: {
    // 发布文章
    async postInvitation(form: Invitation) {
      const res = await createInvitation(form)
      if (res.code === 200) {
        ElMessage.success({
          message: res.message,
          type: 'success',
        })
      } else {
        ElMessage.error({
          message: res.message,
          type: 'warning',
        })
      }
    },
    // 获取全部动态
    async getInvitationList() {
      const res = await getAllInvitation()
      this.invitationList.length = 0
      this.invitationList.push(...res.data)
    },
    // 根据id获取某条动态的详情
    async getInvitationById(id: number) {
      const res = await getOneInvitation(id)
      this.invitationInfo = res.data[0]
    },
    // 获取除指定动态外的其他动态
    async getOtherInvitation(id: number) {
      const res = await getAllInvitation()
      const copyRes = [...res.data]
      const result = copyRes.filter(
        (item: InvitationInfo) => item.invitation_id !== id
      )
      this.otherInvitation = result
    },
    // 按照分类获取动态
    async getInvitationByTagId(id: number) {
      const res = await getInvitationByTag(id)
      this.invitationListByTag.length = 0
      this.invitationListByTag.push(...res.data)
    },
    // 判断用户是否点赞过某个帖子
    async judgeStarredInvitation(userId: number, invitationId: number) {
      const res = await starredInvitation(userId, invitationId)
      // T 有
      return res.message === 'T'
    },
    // 获取用户点赞过的所有帖子
    async findAllStarredInvitation(userId: number) {
      const res = await getAllStarredInvitation(userId)
      this.starredList.length = 0
      this.starredList.push(...res.data)
    },
    // 点赞或取消点赞
    async starOrUnstarInvitationById(
      userId: number,
      invitationId: number,
      type: number
    ) {
      // 默认点赞
      await starOrUnstarInvitation(userId, invitationId, type)
    },
    // 获取用户发布过的帖子
    async getUserPostedInvitation(id: number) {
      const res = await getAllInvitationByUserPosted(id)
      this.postedInvitationList.length = 0
      this.postedInvitationList.push(...res.data)
    },
    async getUserPostedInvitationByPage(id: number, pagenum: number) {
      const res = await getAllInvitationByUserIdAndPagenum(id, pagenum)
      this.postedInvitationList.length = 0
      this.postedInvitationList.push(...res.data.result)
      this.totalNum = res.data.total
    },
    // 模糊查询帖子
    async getInvitationBySearchVal(val: string) {
      const res = await getAllInvitationByKeywords(val)
      this.invitationSearchList.length = 0
      this.invitationSearchList.push(...res.data)
    },
    // 用户帖子更新
    async editInvitation(info: Invitation) {
      const res = await updateInvitationById(info)

      ElMessage({
        type: res.code === 200 ? 'success' : 'warning',
        message: res.message,
      })
    },
  },
  getters: {
    getFirstInvitation: (state) => state.invitationList[0],
    getTargetInvitation: (state) => state.invitationInfo,
  },
})
