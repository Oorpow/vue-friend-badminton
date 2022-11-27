<template>
  <!-- 文章内容 -->
  <div border-b-1 border-b-gray-3>
    <!-- 标题 -->
    <h2 m-0>{{ invitationInfo.title }}</h2>
    <!-- 发帖人 -->
    <div mt-3>
      <!-- 发帖人信息 -->
      <div flex items-center>
        <div flex items-center>
          <div class="i-ic-round-supervisor-account text-lg"></div>
          <span text-sm ml-1>{{ invitationInfo.userInfo.name }}</span>
        </div>
        <div flex ml-2 items-center>
          <div class="i-ic-baseline-access-time-filled text-lg"></div>
          <span text-sm ml-1>{{ postTime }}</span>
        </div>
      </div>
      <!-- 帖子的标签 -->
    </div>
    <!-- 文章主体 -->
    <div class="article_main" v-html="invitationInfo.content"></div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  invitationInfo: InvitationInfo
}

const props = defineProps<Props>()
const app = getCurrentInstance()
const postTime = computed(() =>
  app?.proxy?.$formatTime.format(props.invitationInfo.createAt)
)
</script>

<style scoped>
.article_main {
  @apply w-full;
}
/* 控制v-html生成的标签需要通过deep */
:deep(.article_main img) {
  @apply w-full h-full;
}
</style>
