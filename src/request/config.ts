import type { OpRequestConfig } from './types'
import type { AxiosRequestHeaders } from 'axios'
import OpRequest from '.'
import { getLocalToken } from '@/utils/getLocalStorage'

const config: OpRequestConfig = {
  baseURL: import.meta.env.VITE_LOCAL_SERVER,
  timeout: 50000,
  interceptors: {
    requestInterceptors: (config) => {
      // 在这里发送请求前携带token
      const token = getLocalToken() // 判断是否存在token
      if (token) {
        ;(
          config.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${token}`
      }
      return config
    },
    responseInterceptors: (res) => {
      return res
    },
  },
}

const opRequest = new OpRequest(config)
export default opRequest
