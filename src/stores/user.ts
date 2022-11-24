import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

import { userLogin, userRegister } from '@/request/api/user'
import type {
  ILoginForm,
  IRegisterForm,
  IUserInfo,
} from '@/request/api/user/types'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: <IUserInfo>{},
      token: '',
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
    // 用户注册
    async register(registerForm: IRegisterForm) {
      const res = await userRegister(registerForm)
      if (res.code === 200) {
        ElMessage.success({
          message: res.message,
          type: 'success',
        })
      } else {
        ElMessage.error({
          message: res.message,
          type: 'warning',
        })
      }
    },
  },
  getters: {
    getToken: (state) => state.token,
  },
})
