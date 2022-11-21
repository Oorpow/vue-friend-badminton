import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { ILoginData, ILoginForm } from './types'

export const userLogin = (loginForm: ILoginForm) =>
  opRequest.post<IResData<ILoginData>>({
    url: '/login',
    data: loginForm,
  })
