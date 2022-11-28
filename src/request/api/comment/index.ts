import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { IComment } from './types'

export const getAllCommentById = (id: number) =>
  opRequest.get<IResData<IComment[]>>({
    url: `/comment/${id}`,
  })
