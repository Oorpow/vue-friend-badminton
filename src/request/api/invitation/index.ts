import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type { ILikes, Invitation, InvitationInfo } from './types'

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

// 判断用户是否曾点赞过某个帖子
export const starredInvitation = (userId: number, invitationId: number) =>
  opRequest.get<ISpecialData>({
    url: `/invitation/starred/${userId}/${invitationId}`,
  })

// 获取全部点赞过的帖子
export const getAllStarredInvitation = (userId: number) =>
  opRequest.get<IResData<ILikes[]>>({
    url: `/invitation/starred/list/${userId}`,
  })

// 点赞 | 取消点赞
export const starOrUnstarInvitation = (
  userId: number,
  invitationId: number,
  type: number
) =>
  opRequest.patch({
    url: type !== 0 ? '/invitation/star' : '/invitation/unstar',
    data: {
      userId,
      invitationId,
    },
  })
