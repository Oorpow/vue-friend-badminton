import { defineStore } from 'pinia'
import { getAllBrand } from '@/request/api/brand'
import type { IBrand } from '@/request/api/brand/types'

export const useBrandStore = defineStore('brandStore', {
  state: () => ({
    brandList: <IBrand[]>[],
  }),
  actions: {
    async getBrandList() {
      const res = await getAllBrand()
      this.brandList.length = 0
      this.brandList.push(...res.data)
    },
  },
})
