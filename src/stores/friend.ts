import {
  getAllFriendById,
  getAllFriendReceiveById,
  getAllFriendReqById,
} from '@/request/api/friend'
import type { IFriend, IFriendReqItem } from '@/request/api/friend/types'
import { defineStore } from 'pinia'

export const useFriendStore = defineStore('friendStore', {
  state: () => ({
    friendList: <IFriend[]>[],
    // 发送过的好友申请
    friendReqList: <IFriendReqItem[]>[],
    // 接收到的好友申请
    friendReceiveList: <IFriendReqItem[]>[],
  }),
  actions: {
    // 获取好友列表
    async getFriendListById(id: number) {
      const res = await getAllFriendById(id)
      this.friendList.length = 0
      this.friendList.push(...res.data)
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
  },
  getters: {
    getFirstOfFriend: (state) => state.friendList[0],
  },
})
