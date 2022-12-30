<template>
  <div my-5>
    <!-- 评论数量 -->
    <div>
      <template v-if="commentList.length !== 0">
        <div>
          <span text-2xl font-bold>评论</span>
          <span ml-1>{{ commentList.length }}</span>
        </div>
      </template>
    </div>
    <!-- 评论区主体 -->
    <div mt-7>
      <!-- 发表评论 -->
      <div w-full flex flex-col>
        <div flex w-full h-6>
          <div w-5>
            <Avatar :username="userInfo.name" :avatar="userInfo.avatar" />
          </div>
          <div flex w-full h-full border-b-1 border-b-gray-3 p-b-5>
            <ElInput
              v-bind="inputConfig"
              v-model="commentForm.content"
              resize="none"
              :disabled="!ableToComment"
              :placeholder="commentPlaceHolder"
            />
            <ElButton
              type="primary"
              style="height: 100%; margin-left: 10px"
              :disabled="!ableToComment"
              @click="postComment"
              >发表评论</ElButton
            >
          </div>
        </div>
      </div>
      <!-- 用户评论 -->
      <div mt-10>
        <template v-if="!commentList.length">
          <ElEmpty description="暂无评论"></ElEmpty>
        </template>
        <CommentItem
          :commentList="commentList"
          :currentInvitationId="currentInvitationId"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { storeToRefs } from 'pinia'
import type { ICommentForm, ISpecialComment } from '@/request/api/comment/types'
import { useUserStore } from '@/stores/user'
import { useCommentStore } from '@/stores/comment'

type Props = {
  commentList: ISpecialComment[]
  currentInvitationId: number
}

const props = defineProps<Props>()
const userStore = useUserStore()
const commentStore = useCommentStore()
const { userInfo } = storeToRefs(userStore)

const inputConfig = {
  rows: 2,
  type: 'textarea',
}

const commentForm = reactive<ICommentForm>({
  content: '',
  inv_id: props.currentInvitationId,
  parent_id: null,
  user_id: userInfo.value.id,
})

const ableToComment = computed(() => (userInfo.value.id ? true : false))
const commentPlaceHolder = computed(() =>
  ableToComment.value ? '请发表友善的评论' : '请先登录后再进行评论'
)

// 发表评论
const postComment = () => {
  if (userInfo.value.id) {
    commentStore.createComment(commentForm)
    commentForm.content = ''
  }
}
</script>

<style scoped>
:deep(.el-textarea__inner) {
  @apply h-6;
}
</style>
