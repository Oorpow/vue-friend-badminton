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
