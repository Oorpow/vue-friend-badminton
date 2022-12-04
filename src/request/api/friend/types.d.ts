export interface IChatFriend {
  friendInfo: IFriendItem
}

export interface IFriendItem {
  id: number
  name: string
  avatar: string
}

export interface IFriend {
  id: number
  userId: number
  friendInfo: IFriendItem
}

export interface IFriendReq {
  id: number
  name: string
  avatar: string | null
  socketId: string
}

export interface IFriendReqItem {
  id: number
  userId: number
  name: string
  status: number
  avatar: string
  create_at: string
}
