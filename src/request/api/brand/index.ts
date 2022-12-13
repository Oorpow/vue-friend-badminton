import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { IBrand } from './types'

export const getAllBrand = () =>
  opRequest.get<IResData<IBrand[]>>({
    url: '/brand',
  })
