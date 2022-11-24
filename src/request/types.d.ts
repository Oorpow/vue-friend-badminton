import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface OpInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  responseInterceptors?: (res: AxiosResponse) => AxiosResponse
}

export interface OpRequestConfig extends AxiosRequestConfig {
  interceptors?: OpInterceptors
  showLoading?: boolean
}

export interface IResData<T> {
  code: number
  data: T
  message: string
}

export interface ISpecialData {
  code: number
  message: string
}
