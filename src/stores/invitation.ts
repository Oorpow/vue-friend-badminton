import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

import {
  createInvitation,
  getAllInvitation,
  getOneInvitation,
} from '@/request/api/invitation'
import type { Invitation, InvitationInfo } from '@/request/api/invitation/types'

export const useInvitationStore = defineStore('invitationStore', {
  state: () => {
    return {
      invitationList: <InvitationInfo[]>[],
      invitationInfo: <InvitationInfo>{},
      otherInvitation: <InvitationInfo[]>[],
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
  },
  getters: {
    getFirstInvitation: (state) => state.invitationList[0],
    getTargetInvitation: (state) => state.invitationInfo,
  },
})
