<template>
  <!-- 文章内容 -->
  <div border-b-1 border-b-gray-3>
    <!-- 标题 -->
    <h2 m-0>{{ invitationInfo.title }}</h2>
    <!-- 文章主体 -->
    <div class="article_main" v-html="invitationInfo.content"></div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  invitationInfo: InvitationInfo
}

const props = defineProps<Props>()
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
