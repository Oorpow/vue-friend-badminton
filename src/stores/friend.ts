import {
  getAllFriendById,
  getAllFriendReceiveById,
  getAllFriendReqById,
  sendFriendReq,
} from '@/request/api/friend'
import type { IFriend, IFriendReqItem } from '@/request/api/friend/types'
import { ElNotification } from 'element-plus'
import { defineStore } from 'pinia'

export const useFriendStore = defineStore('friendStore', {
  state: () => ({
    friendList: <IFriend[]>[],
    // 发送过的好友申请
    friendReqList: <IFriendReqItem[]>[],
    // 接收到的好友申请
    friendReceiveList: <IFriendReqItem[]>[],
    // 小铃铛提示的好友申请数量
    friendBellList: <IFriendReqItem[]>[],
  }),
  actions: {
    // 获取好友列表
    async getFriendListById(id: number) {
      const res = await getAllFriendById(id)
      this.friendList.length = 0
      this.friendList.push(...res.data)
    },
    // 发送好友申请
    async sendReqToFriend(fromUid: number, toUid: number) {
      const res = await sendFriendReq(fromUid, toUid)
      if (res.code === 200) {
        ElNotification({
          title: '好友申请发送成功',
          type: 'success',
        })
      }
    },
    // 获取发送过的好友申请列表
    async getFriendReqList(id: number) {
      const res = await getAllFriendReqById(id)
      this.friendReqList.length = 0
      this.friendReqList.push(...res.data)
    },
    // 获取接收到的好友申请列表
    async getFriendReceiveList(id: number) {
      const res = await getAllFriendReceiveById(id)
      this.friendReceiveList.length = 0
      this.friendReceiveList.push(...res.data)
    },
    // 过滤出未处理的好友请求
    async getFriendReceiveUnHandle(id: number) {
      await this.getFriendReceiveList(id)

      const result = this.friendReceiveList.filter((item) => item.status === 0)
      this.friendBellList = result
    },
  },
  getters: {
    getFirstOfFriend: (state) => state.friendList[0],
    getFriendBellList: (state) => state.friendBellList,
  },
})
