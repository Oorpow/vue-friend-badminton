<template>
  <div my-5>
    <!-- 评论数量 -->
    <div>
      <template v-if="commentList.length !== 0">
        <div>
          <span text-2xl font-bold>评论</span>
          <span ml-1>{{ commentList.length }}</span>
        </div>
        <!-- <span>评论{{ commentList.length }}</span> -->
      </template>
      <template v-else>
        <span>暂无评论，快来发表评论吧</span>
      </template>
    </div>
    <!-- 评论区主体 -->
    <div mt-7>
      <!-- 发表评论 -->
      <div w-full flex flex-col>
        <div flex w-full h-6>
          <div w-5>
            <ElAvatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              size="default"
              w-6
            />
          </div>
          <div flex w-full h-full border-b-1 border-b-gray-3 p-b-5>
            <ElInput v-bind="inputConfig" />
            <ElButton type="primary" style="height: 100%; margin-left: 10px"
              >发表评论</ElButton
            >
          </div>
        </div>
      </div>
      <!-- 用户评论 -->
      <div mt-10>
        <CommentItem :commentList="commentList" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IComment } from '@/request/api/comment/types'

type Props = {
  commentList: IComment[]
}

const props = defineProps<Props>()
const inputConfig = {
  rows: 2,
  type: 'textarea',
  resize: 'none',
}
console.log(props.commentList)
</script>

<style scoped>
:deep(.el-textarea__inner) {
  @apply h-6;
}
</style>
