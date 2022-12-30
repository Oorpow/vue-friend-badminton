import opRequest from '@/request/config'
import type { IResData, ISpecialData } from '@/request/types'
import type {
  ILoginData,
  ILoginForm,
  IRegisterForm,
  IUserInfo,
  IUserForm,
} from './types'

export const userLogin = (loginForm: ILoginForm) =>
  opRequest.post<IResData<ILoginData>>({
    url: '/login',
    data: loginForm,
  })

export const userLogout = (id: number) =>
  opRequest.post({
    url: '/login/out',
    data: {
      id,
    },
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

// 根据id查询用户信息
export const userInfoGetById = (id: number) =>
  opRequest.get<IResData<IUserInfo>>({
    url: `/user/${id}`,
  })

// 修改用户信息
export const updateInfo = (form: IUserForm) =>
  opRequest.patch<ISpecialData>({
    url: '/user',
    data: form,
  })

// 用户修改空间背景图片
export const updateUserBg = (userId: number, url: string) =>
  opRequest.patch({
    url: '/user/bg',
    data: {
      userId,
      url,
    },
  })

export const updateUserAvatar = (userId: number, url: string) =>
  opRequest.patch({
    url: '/user/avatar',
    data: {
      userId,
      url,
    },
  })
