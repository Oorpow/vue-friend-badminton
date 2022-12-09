import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type { IMsgItem, IUnReadMsg } from './types'

// 获取与某个好友的聊天记录
export const getAllMsgRecordById = (userId: number, friendId: number) =>
  opRequest.get<IResData<IMsgItem[]>>({
    url: `/message/${userId}/${friendId}`,
  })

// 获取未读信息
export const getAllNoReadMsg = (userId: number, friendId: number) =>
  opRequest.get<IResData<IMsgItem[]>>({
    url: `/message/unread/${userId}/${friendId}`,
  })

// 获取与全体好友的未读信息总数
export const getAmountOfNoReadMsg = (userId: number) =>
  opRequest.get<IResData<IUnReadMsg[]>>({
    url: `/message/unread/num/${userId}`,
  })

// 修改未读信息为已读
export const updateNoReaadMsgToRead = (userId: number, friendId: number) =>
  opRequest.put<ISpecialData>({
    url: `/message/unread/${userId}/${friendId}`,
  })

// 发送聊天信息
export const sendMsgToOneById = (
  fromId: number,
  toId: number,
  content: string
) =>
  opRequest.post({
    url: '/message',
    data: {
      fromId,
      toId,
      content,
    },
  })
