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
  avatar: string
  status: number
}

export interface ILoginData {
  token: string
  user: IUserInfo
}
