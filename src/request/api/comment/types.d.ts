export interface CommentUserInfo {
  id: number
  name: string
  avatar: string | null
}

export interface IComment {
  id: number
  content: string
  createAt: string
  parent_id: number | null
  userInfo: CommentUserInfo
  children: IComment[]
}
