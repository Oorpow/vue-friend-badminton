import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { ITag } from './types'

export const getAllTag = () =>
  opRequest.get<IResData<ITag[]>>({
    url: '/tag',
  })
