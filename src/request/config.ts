import type { OpRequestConfig } from './types'
import type { AxiosRequestHeaders } from 'axios'
import OpRequest from '.'

const config: OpRequestConfig = {
  baseURL: 'http://localhost:8000',
  timeout: 50000,
  interceptors: {
    requestInterceptors: (config) => {
      // 在这里发送请求前携带token
      const token = '' // 判断是否存在token
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
