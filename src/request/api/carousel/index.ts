import opRequest from '@/request/config'
import type { IResData } from '@/request/types'
import type { ICarouselItem } from './types'

export const getAllCarousel = () =>
  opRequest.get<IResData<ICarouselItem[]>>({
    url: '/carousel',
  })
