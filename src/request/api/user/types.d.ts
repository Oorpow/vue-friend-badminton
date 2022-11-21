export interface ILoginForm {
  name: string
  password: string
}

export interface IUserInfo {
  id: number
  name: string
}

export interface ILoginData {
  token: string
  user: IUserInfo
}
