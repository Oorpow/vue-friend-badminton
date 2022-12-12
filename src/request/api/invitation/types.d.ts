import type { IUserInfo } from '../user/types'
export interface Invitation {
  title: string
  content: string
  img: string
  uid: number
  tag: any[]
}

export interface ITag {
  id: number
  name: string
}

export interface InvitationInfo {
  invitation_id: number
  title: string
  content: string
  img: string
  userInfo: IUserInfo
  tagList: ITag[]
  createAt: string
  stars: number
}

export interface ILikes {
  id: number
  user_id: number
  invitation_id: number
}
