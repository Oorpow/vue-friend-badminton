import { defineStore } from 'pinia'
import {
  getAllMsgRecordById,
  getAllNoReadMsg,
  getAmountOfNoReadMsg,
  sendMsgToOneById,
  updateNoReaadMsgToRead,
} from '@/request/api/message'
import type { ILastMsg, IMsgItem } from '@/request/api/message/types'
import type { IFriend } from '@/request/api/friend/types'

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    msgList: <IMsgItem[]>[],
    lastMsgList: <ILastMsg[]>[],
    unreadMap: new Map(),
    numOfUnRead: 0,
    imgPreviewList: <string[]>[],
  }),
  actions: {
    // 获取聊天记录
    async getMsgRecordById(userId: number, friendId: number) {
      const res = await getAllMsgRecordById(userId, friendId)
      this.msgList.length = 0
      this.msgList.push(...res.data)
    },
    // 获取与某个用户的未读信息
    async getUnreadWithFriend(userId: number, friendId: number) {
      await getAllNoReadMsg(userId, friendId)
    },
    // 修改未读信息的状态为已读
    async updateUnreadMsgToRead(userId: number, friendId: number) {
      await updateNoReaadMsgToRead(userId, friendId)
    },
    // 发送消息
    async sendMsgToFriend(
      fromId: number,
      toId: number,
      content: string,
      type: number = 0
    ) {
      await sendMsgToOneById(fromId, toId, content, type)
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
            type: res.data[res.data.length - 1].type,
          })
        }
      })
    },
    // 循环获取与所有用户的未读信息
    getNoReadMsgWithAllUser(userId: number, friendList: IFriend[]) {
      this.unreadMap.clear()
      friendList.forEach(async (item) => {
        const res = await getAllNoReadMsg(userId, item.friendInfo.id)
        this.unreadMap.set(item.friendInfo.name, res.data)
      })
    },
    // 获取用户与所有好友的未读信息数
    async getNumOfAllUnRead(userId: number) {
      const res = await getAmountOfNoReadMsg(userId)
      this.numOfUnRead = res.data.length
    },
    // 获取好友聊天之间的所有图片，组成预览列表
    async getAllImgOfMsg(userId: number, friendId: number) {
      await this.getMsgRecordById(userId, friendId)
      this.imgPreviewList.length = 0
      this.msgList.forEach((item) => {
        if (item.type === 1) {
          this.imgPreviewList.unshift(
            import.meta.env.VITE_LOCAL_SERVER + item.content
          )
        }
      })
    },
  },
})
