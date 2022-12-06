import { defineStore } from 'pinia'

import { getAllCarousel } from '@/request/api/carousel'
import type { ICarouselItem } from '@/request/api/carousel/types'

export const useCarouselStore = defineStore('carouselStore', {
  state: () => {
    return {
      carouselList: <ICarouselItem[]>[],
    }
  },
  actions: {
    async getCarouselList() {
      const res = await getAllCarousel()

      this.carouselList.length = 0
      this.carouselList.push(...res.data)
    },
  },
})
