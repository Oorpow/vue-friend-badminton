import { defineStore } from 'pinia'

import { userLogin } from '@/request/api/user'
import type { ILoginForm, IUserInfo } from '@/request/api/user/types'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: <IUserInfo>{},
      token: <string>'',
    }
  },
  persist: {
    paths: ['userInfo', 'token'],
  },
  actions: {
    // 用户登录获取用户信息
    async login(loginForm: ILoginForm) {
      const res = await userLogin(loginForm)
      this.userInfo = { ...res.data.user }
      this.token = res.data.token
    },
    // 退出登录
    logout() {
      localStorage.removeItem('userStore')
    },
  },
  getters: {
    getToken: (state) => state.token,
  },
})
