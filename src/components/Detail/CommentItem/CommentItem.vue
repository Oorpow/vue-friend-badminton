<template>
  <div flex w-full mt-5 v-for="item in commentList" :key="item.id">
    <div>
      <Avatar :username="item.userInfo.name" :avatar="item.userInfo.avatar" />
    </div>
    <div w-full flex flex-col ml-2>
      <span text-gray-6 text-sm>{{ item.userInfo.name }}</span>
      <p m-0>{{ item.content }}</p>
      <div mt-2>
        <span text-sm text-gray-4>{{ $formatTime.format(item.createAt) }}</span>
        <span class="reply_button" @click="showReplyInput(item)">回复</span>
        <template v-if="item.isShowInput">
          <div>
            <ElInput
              v-bind="inputConfig"
              v-model="commentForm.content"
              resize="none"
            />
            <ElButton type="primary" @click="postComment(item)">发布</ElButton>
          </div>
        </template>
      </div>
      <!-- 递归组件 -->
      <CommentItem
        v-if="'children' in item"
        :commentList="item.children"
        :currentInvitationId="currentInvitationId"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import type { ICommentForm, ISpecialComment } from '@/request/api/comment/types'
import { useCommentStore } from '@/stores/comment'
import { useUserStore } from '@/stores/user'

type Props = {
  commentList: any[]
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

// 显示评论的回复框
const showReplyInput = (item: ISpecialComment) => {
  item.isShowInput = true
  commentForm.parent_id = item.id
}

// 回复/评论
const postComment = (item: ISpecialComment) => {
  commentStore.createComment(commentForm)
  commentForm.content = ''
  item.isShowInput = false
}
</script>

<style scoped>
.boundary {
  @apply border-b-1 border-b-gray-3;
}
.reply_button {
  @apply text-sm ml-3 text-gray-4 cursor-pointer hover:hover:text-blue-5;
}
</style>
