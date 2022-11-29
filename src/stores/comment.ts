import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { getAllCommentById, postCommentWithForm } from '@/request/api/comment'
import type {
  IComment,
  ICommentForm,
  ISpecialComment,
} from '@/request/api/comment/types'

export const useCommentStore = defineStore('commentStore', {
  state: () => {
    return {
      commentList: <IComment[]>[],
      commentListWithControl: <ISpecialComment[]>[],
    }
  },
  actions: {
    async getCommentListById(id: number) {
      const res = await getAllCommentById(id)
      this.commentList.length = 0
      this.commentList.push(...res.data)
      const result = this.addNewField(res.data)
      this.commentListWithControl.length = 0
      this.commentListWithControl.push(...result)
    },
    async createComment(commentForm: ICommentForm) {
      const res = await postCommentWithForm(commentForm)
      if (res.code === 200) {
        this.getCommentListById(commentForm.inv_id)
        ElMessage.success({
          message: res.message,
        })
      } else {
        ElMessage.error({
          message: '发表评论失败',
        })
      }
    },
    // 给commentList添加自定义字段
    addNewField(arr: any[]) {
      arr.forEach((item) => {
        item.isShowInput = false
        if (item.children) {
          this.addNewField(item.children)
        }
      })
      return arr
    },
  },
})
