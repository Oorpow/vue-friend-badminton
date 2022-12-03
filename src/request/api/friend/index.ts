import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { IFriend } from './types'

// 获取某个用户的好友列表
export const getAllFriendById = (id: number) =>
  opRequest.get<IResData<IFriend[]>>({
    url: `/friend/${id}`,
  })

// 添加好友
const addOneFriend = () =>
  opRequest.post({
    url: '/',
  })
