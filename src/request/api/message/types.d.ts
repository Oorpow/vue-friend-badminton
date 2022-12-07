export interface IMsgFriendInfo {
  userId: number
  name: string
  avatar: string
  status: number
}

export interface IMsgItem {
  id: number
  from_uid: number
  to_uid: number
  content: string
  is_read: number
  create_at: string
  friendInfo: IMsgFriendInfo
}
