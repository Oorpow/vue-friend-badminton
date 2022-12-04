import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
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
