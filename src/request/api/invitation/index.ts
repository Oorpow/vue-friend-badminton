import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type {
  ILikes,
  Invitation,
  InvitationInfo,
  InvitationSearch,
  InvitationListByPage,
} from './types'

export const createInvitation = (invitationForm: Invitation) =>
  opRequest.post<ISpecialData>({
    url: '/invitation',
    data: invitationForm,
  })

export const getAllInvitation = (pagenum: number = 1) =>
  opRequest.get<IResData<InvitationListByPage>>({
    url: `/invitation/pagenum/${pagenum}`,
  })

// 获取用户发布的帖子
export const getAllInvitationByUserPosted = (id: number) =>
  opRequest.get<IResData<InvitationInfo[]>>({
    url: `/invitation/user/${id}`,
  })

// 获取用户发布的帖子(分页)
export const getAllInvitationByUserIdAndPagenum = (
  id: number,
  pagenum: number
) =>
  opRequest.get<IResData<InvitationListByPage>>({
    url: `/invitation/user/${id}/pagenum/${pagenum}`,
  })

// 根据关键字查询帖子
export const getAllInvitationByKeywords = (val: string) =>
  opRequest.post<IResData<InvitationSearch[]>>({
    url: '/invitation/search',
    data: {
      val,
    },
  })

export const getOneInvitation = (id: number) =>
  opRequest.get<IResData<InvitationInfo[]>>({
    url: `/invitation/${id}`,
  })

// 按照分类获取帖子
export const getInvitationByTag = (id: number, pagenum: number = 1) =>
  opRequest.get<IResData<InvitationListByPage>>({
    url: `/invitation/tag/${id}/pagenum/${pagenum}`,
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

// 更新帖子信息
export const updateInvitationById = (info: Invitation) =>
  opRequest.patch<ISpecialData>({
    url: '/invitation/update',
    data: info,
  })
