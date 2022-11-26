import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

import { createInvitation } from '@/request/api/invitation'
import type { Invitation } from '@/request/api/invitation/types'

export const useInvitationStore = defineStore('invitationStore', {
  state: () => {
    return {}
  },
  actions: {
    // 发布文章
    async postInvitation(form: Invitation) {
      const res = await createInvitation(form)
      if (res.code === 200) {
        ElMessage.success({
          message: res.message,
          type: 'success',
        })
      } else {
        ElMessage.error({
          message: res.message,
          type: 'warning',
        })
      }
    },
  },
})
