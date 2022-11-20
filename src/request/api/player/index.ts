import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { PlayerItem } from './types'

export const getAllPlayer = () =>
  opRequest.get<IResData<PlayerItem[]>>({
    url: '/player',
  })
