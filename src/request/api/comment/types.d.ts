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

export interface ISpecialComment extends IComment {
  isShowInput: boolean
}

export interface ICommentForm {
  content: string
  inv_id: number
  parent_id: number | null
  user_id: number
}
