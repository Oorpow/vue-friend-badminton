import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { IMsgItem } from './types'

// 获取与某个好友的聊天记录
export const getAllMsgRecordById = (userId: number, friendId: number) =>
  opRequest.get<IResData<IMsgItem[]>>({
    url: `/message/${userId}/${friendId}`,
  })
