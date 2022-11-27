<template>
  <div class="flex flex-col w-3.5/10 mr-1 my-2">
    <div overflow-hidden>
      <img :src="serverUrl + news.img" alt="" class="news_img" />
    </div>
    <div class="w-9/10 mx-auto flex flex-col">
      <h4 class="news_title" my-1 hover:text-blue-5 transition cursor-pointer>
        {{ news.title }}
      </h4>
      <span text-gray-6 text-sm>{{ news.userInfo.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  news: InvitationInfo
}

const serverUrl = import.meta.env.VITE_LOCAL_SERVER

defineProps<Props>()
</script>

<style scoped>
.news_img {
  @apply w-full h-full hover:scale-105 transition cursor-pointer;
}
</style>
