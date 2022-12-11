<template>
  <div
    class="flex flex-col p-b-8 border-b-1 border-gray-2 my-5"
    v-for="item in list"
    :key="item.invitation_id"
  >
    <!-- avatar -->
    <div flex items-center>
      <ElAvatar>o</ElAvatar>
      <span ml-2 text-sm>{{ item.userInfo.name }}</span>
    </div>
    <div flex justify-between>
      <!-- title -->
      <div class="w-50 flex flex-col justify-between">
        <h3 class="w-8/10">
          {{ item.title }}
        </h3>
        <div class="w-8/10 flex items-center justify-between">
          <div>
            <span
              text-sm
              px-2
              py-1
              bg-gray-2
              rounded-2xl
              ml-2
              first:ml-0
              v-for="tag in item.tagList"
              :key="tag.id"
              >{{ tag.name }}</span
            >
            <span text-sm ml-2>{{ $formatTime.format(item.createAt) }}</span>
          </div>
          <div>
            <ElIcon :size="24">
              <Star />
            </ElIcon>
          </div>
        </div>
      </div>
      <!-- img -->
      <div>
        <ElImage :src="serverUrl + item.img" class="w-11 h-11" fit="cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from '@element-plus/icons-vue'
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  list: InvitationInfo[]
}
const props = defineProps<Props>()

const serverUrl = import.meta.env.VITE_LOCAL_SERVER
</script>

<style scoped>
.news_img {
  @apply w-full h-full hover:scale-105 transition cursor-pointer;
}
.desc p {
  @apply w-8/10 h-4 leading-5 line-clamp-2 text-ellipsis break-words;
}
</style>
