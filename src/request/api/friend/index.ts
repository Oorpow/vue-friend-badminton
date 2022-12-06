import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type { IFriend, IFriendReqItem } from './types'

// 获取某个用户的好友列表
export const getAllFriendById = (id: number) =>
  opRequest.get<IResData<IFriend[]>>({
    url: `/friend/${id}`,
  })

// 获取发送过的好友申请
export const getAllFriendReqById = (id: number) =>
  opRequest.get<IResData<IFriendReqItem[]>>({
    url: `/friend/${id}/req`,
  })

// 获取接收到的好友申请
export const getAllFriendReceiveById = (id: number) =>
  opRequest.get<IResData<IFriendReqItem[]>>({
    url: `/friend/${id}/receive`,
  })

// 发送好友请求
export const sendFriendReq = (fromUid: number, toUid: number) =>
  opRequest.post<ISpecialData>({
    url: '/friend/send-req',
    data: {
      fromUid,
      toUid,
    },
  })

// 同意好友请求
export const acceptApplication = (senderId: number, receiverId: number) =>
  opRequest.post({
    url: '/friend/agree',
    data: {
      userId: senderId,
      friendId: receiverId,
    },
  })

// 拒绝好友请求
export const denyApplication = (senderId: number, receiverId: number) =>
  opRequest.post({
    url: '/friend/deny',
    data: {
      userId: senderId,
      friendId: receiverId,
    },
  })
