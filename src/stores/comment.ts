import { getAllCommentById } from '@/request/api/comment'
import type { IComment } from '@/request/api/comment/types'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('commentStore', {
  state: () => {
    return {
      commentList: <IComment[]>[],
    }
  },
  actions: {
    async getCommentListById(id: number) {
      const res = await getAllCommentById(id)
      this.commentList.length = 0
      this.commentList.push(...res.data)
    },
  },
})
