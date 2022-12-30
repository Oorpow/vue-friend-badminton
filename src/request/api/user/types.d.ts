export interface ILoginForm {
  name: string
  password: string
}

export interface IRegisterForm {
  name: string
  password: string
  avatar?: string
}

export interface IUserInfo {
  id: number
  name: string
  password: string
  avatar: string
  status: number
  space_bg: string
  description: string
}

export interface ILoginData {
  token: string
  refreshToken: string
  user: IUserInfo
}

export interface IUserForm {
  id: number
  name: string
  password: string
  desc: string
}
