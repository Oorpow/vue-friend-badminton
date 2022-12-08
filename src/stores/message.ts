import { getAllMsgRecordById, sendMsgToOneById } from '@/request/api/message'
import type { IMsgItem } from '@/request/api/message/types'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    msgList: <IMsgItem[]>[],
  }),
  actions: {
    // 获取聊天记录
    async getMsgRecordById(userId: number, friendId: number) {
      const res = await getAllMsgRecordById(userId, friendId)
      this.msgList.length = 0
      this.msgList.push(...res.data)
    },
    // 发送消息
    async sendMsgToFriend(fromId: number, toId: number, content: string) {
      await sendMsgToOneById(fromId, toId, content)
    },
  },
})
