import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type { IComment, ICommentForm } from './types'

export const getAllCommentById = (id: number) =>
  opRequest.get<IResData<IComment[]>>({
    url: `/comment/${id}`,
  })

export const postCommentWithForm = (commentForm: ICommentForm) =>
  opRequest.post<ISpecialData>({
    url: '/comment',
    data: commentForm,
  })
