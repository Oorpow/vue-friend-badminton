import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from 'axios'
import type { OpInterceptors, OpRequestConfig } from './types'
import { ElMessage } from 'element-plus'

class OpRequest {
  instance: AxiosInstance
  interceptors?: OpInterceptors
  showLoading?: boolean

  constructor(config: OpRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true

    // 实例自身的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptors
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptors
    )

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (err: AxiosError) => {
        return err
      }
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (err: AxiosError) => {
        ElMessage({
          type: 'warning',
          message: err.response?.data as string,
        })
        return err
      }
    )
  }

  request<T>(config: OpRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // if (config.interceptors?.responseInterceptors) {
          // }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }

  get<T>(config: OpRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'GET' })
  }

  post<T>(config: OpRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'POST' })
  }

  put<T>(config: OpRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'PUT' })
  }

  patch<T>(config: OpRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'PATCH' })
  }
}

export default OpRequest
