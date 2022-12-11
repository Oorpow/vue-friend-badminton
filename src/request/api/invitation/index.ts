import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type { Invitation, InvitationInfo } from './types'

export const createInvitation = (invitationForm: Invitation) =>
  opRequest.post<ISpecialData>({
    url: '/invitation',
    data: invitationForm,
  })

export const getAllInvitation = () =>
  opRequest.get<IResData<InvitationInfo[]>>({
    url: '/invitation',
  })

export const getOneInvitation = (id: number) =>
  opRequest.get<IResData<InvitationInfo[]>>({
    url: `/invitation/${id}`,
  })

// 按照分类获取帖子
export const getInvitationByTag = (id: number) =>
  opRequest.get<IResData<InvitationInfo[]>>({
    url: `/invitation/tag/${id}`,
  })
