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
        <span class="reply_button" @click="emitShowReplyInput(item)">回复</span>
      </div>
      <!-- 递归组件 -->
      <CommentItem
        v-if="'children' in item"
        :commentList="item.children"
        :currentInvitationId="currentInvitationId"
        @showReplyInput="emitShowReplyInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISpecialComment } from '@/request/api/comment/types'

type Props = {
  commentList: any[]
  currentInvitationId: number
}

const props = defineProps<Props>()
const emits = defineEmits(['showReplyInput'])

// 显示评论的回复框
const emitShowReplyInput = (item: ISpecialComment) => {
  emits('showReplyInput', item)
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
