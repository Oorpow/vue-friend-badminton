import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import {
  userLogin,
  userRegister,
  userSearchByName,
  userLogout,
  updateUserBg,
  userInfoGetById,
  updateUserAvatar,
  updateInfo,
} from '@/request/api/user'
import type {
  ILoginForm,
  IRegisterForm,
  IUserInfo,
  IUserForm,
} from '@/request/api/user/types'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: <IUserInfo>{},
      token: '',
      userList: <IUserInfo[]>[],
      spaceUserInfo: <IUserInfo>{},
    }
  },
  persist: {
    paths: ['userInfo', 'token'],
  },
  actions: {
    // 用户登录获取用户信息
    async login(loginForm: ILoginForm) {
      const res = await userLogin(loginForm)
      if (res.code === 200) {
        this.userInfo = { ...res.data.user }
        this.token = res.data.token
      }
    },
    // 退出登录
    async logout(id: number) {
      this.token = ''
      this.userInfo = {
        id: 0,
        password: '',
        name: '',
        avatar: '',
        status: 0,
        space_bg: '',
        description: '',
      }
      await userLogout(id)
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
    // 根据用户名查询用户
    async getUserByName(username: string) {
      if (username.trim() === '') {
        this.userList.length = 0
      } else {
        const res = await userSearchByName(username)
        this.userList.length = 0
        this.userList.push(...res.data)
      }
    },
    // 根据id获取空间用户信息
    async getUserInfoById(id: number) {
      const res = await userInfoGetById(id)
      this.spaceUserInfo = { ...res.data }
    },
    // 用户更新空间背景
    async updateUserSpaceBg(id: number, url: string) {
      await updateUserBg(id, url)
    },
    // 更新用户头像
    async updateUserAvatar(id: number, url: string) {
      await updateUserAvatar(id, url)
    },
    // 用户修改个人信息
    async updatePersonalInfo(form: IUserForm) {
      const res = await updateInfo(form)

      if (res.code === 200) {
        ElMessage({
          type: 'success',
          message: res.message + ',请重新登录以应用',
        })
        setTimeout(() => {
          this.logout(form.id)
          window.location.href = '/login'
        }, 1000)
      }
    },
  },
  getters: {
    getToken: (state) => state.token,
    getUid: (state) => state.userInfo.id,
  },
})
