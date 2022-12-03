import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type { ILoginData, ILoginForm, IRegisterForm, IUserInfo } from './types'

export const userLogin = (loginForm: ILoginForm) =>
  opRequest.post<IResData<ILoginData>>({
    url: '/login',
    data: loginForm,
  })

export const userRegister = (registerForm: IRegisterForm) =>
  opRequest.post<ISpecialData>({
    url: '/user',
    data: registerForm,
  })

// 搜索用户
export const userSearchByName = (username: string) =>
  opRequest.post<IResData<IUserInfo[]>>({
    url: '/user/search',
    data: {
      username,
    },
  })
