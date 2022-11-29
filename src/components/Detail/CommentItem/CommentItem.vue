<template>
  <div flex w-full mt-5 v-for="item in commentList" :key="item.id">
    <div>
      <ElAvatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        size="default"
        w-6
      />
    </div>
    <div w-full flex flex-col ml-2>
      <span text-gray-6 text-sm>{{ item.userInfo.name }}</span>
      <p m-0>{{ item.content }}</p>
      <div mt-2>
        <span text-sm text-gray-4>{{
          app?.proxy?.$formatTime.format(item.createAt)
        }}</span>
        <span class="reply_button" @click="showReplyInput(item)">回复</span>
        <template v-if="item.isShowInput">
          <div>
            <ElInput v-bind="inputConfig" v-model="commentForm.content" />
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
import { getCurrentInstance, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import type { ICommentForm, ISpecialComment } from '@/request/api/comment/types'
import { useCommentStore } from '@/stores/comment'
import { useUserStore } from '@/stores/user'

type Props = {
  commentList: ISpecialComment[]
  currentInvitationId: number
}

const props = defineProps<Props>()

const app = getCurrentInstance()
const userStore = useUserStore()
const commentStore = useCommentStore()
const { userInfo } = storeToRefs(userStore)

const inputConfig = {
  rows: 2,
  type: 'textarea',
  resize: 'none',
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
