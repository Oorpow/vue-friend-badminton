import { getAllFriendById } from '@/request/api/friend'
import type { IFriend } from '@/request/api/friend/types'
import { defineStore } from 'pinia'

export const useFriendStore = defineStore('friendStore', {
  state: () => ({
    friendList: <IFriend[]>[],
  }),
  actions: {
    async getFriendListById(id: number) {
      const res = await getAllFriendById(id)
      this.friendList.length = 0
      this.friendList.push(...res.data)
    },
  },
  getters: {},
})
