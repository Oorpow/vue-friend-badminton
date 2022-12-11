import { defineStore } from 'pinia'
import { getAllTag } from '@/request/api/tag'
import type { ITag } from '@/request/api/tag/types'

export const useTagStore = defineStore('tagStore', {
  state: () => ({
    tagList: <ITag[]>[],
  }),
  actions: {
    async getTagList() {
      const res = await getAllTag()
      this.tagList.length = 0
      this.tagList.push(...res.data)
    },
  },
})
