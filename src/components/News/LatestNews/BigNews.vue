<template>
  <div class="w-6.6/10 overflow-hidden">
    <img :src="serverUrl + invitation.img" alt="" class="news_img" />
  </div>
  <div class="w-3/10">
    <h1 hover:text-blue-5 transition cursor-pointer>
      {{ invitation.title }}
    </h1>
    <div class="news_info_author">
      <span>{{ invitation.userInfo.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  invitation: InvitationInfo
}

defineProps<Props>()
const serverUrl = import.meta.env.VITE_LOCAL_SERVER
</script>

<style scoped>
.news_img {
  @apply w-full h-full hover:scale-105 transition cursor-pointer;
}
</style>
