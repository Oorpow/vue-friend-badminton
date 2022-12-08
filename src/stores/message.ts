import { defineStore } from 'pinia'
import { getAllMsgRecordById, sendMsgToOneById } from '@/request/api/message'
import type { ILastMsg, IMsgItem } from '@/request/api/message/types'
import type { IFriend } from '@/request/api/friend/types'

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    msgList: <IMsgItem[]>[],
    lastMsgList: <ILastMsg[]>[],
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
    // 循环获取用户间聊天的最后一条信息
    getAllLastMsg(userId: number, friendList: IFriend[]) {
      this.lastMsgList.length = 0
      friendList.forEach(async (item) => {
        const res = await getAllMsgRecordById(userId, item.friendInfo.id)
        if (res.data.length !== 0) {
          this.lastMsgList.push({
            userId,
            friendId: item.friendInfo.id,
            content: res.data[res.data.length - 1].content,
          })
        }
      })
    },
  },
})
