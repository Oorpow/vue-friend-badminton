import { getAllMsgRecordById } from '@/request/api/message'
import type { IMsgItem } from '@/request/api/message/types'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    msgList: <IMsgItem[]>[],
  }),
  actions: {
    async getMsgRecordById(userId: number, friendId: number) {
      const res = await getAllMsgRecordById(userId, friendId)
      this.msgList.length = 0
      this.msgList.push(...res.data)
    },
  },
})
