import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { IPlayerInfo, PlayerItem } from './types'

export const getAllPlayer = () =>
  opRequest.get<IResData<PlayerItem[]>>({
    url: '/player',
  })

export const getOnePlayer = (id: number) =>
  opRequest.get<IResData<IPlayerInfo>>({
    url: `/player/${id}`,
  })
