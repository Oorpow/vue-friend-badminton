<template>
  <div
    flex
    flex-col
    cursor-pointer
    p-3
    border-b-1
    border-gray-2
    @click="navToArticle"
  >
    <div flex items-center>
      <Avatar
        :username="invitationInfo.userInfo.name"
        :avatar="invitationInfo.userInfo.avatar"
      />
      <span ml-2 text-sm>{{ invitationInfo.userInfo.name }}</span>
    </div>
    <div m-auto>
      <ElImage
        :src="serverUrl + invitationInfo.img"
        fit="cover"
        style="width: 140px; height: 140px"
      />
    </div>
    <div>
      <span text-sm text-gray-5>{{ invitationInfo.title }}</span>
    </div>
    <div flex mt-2>
      <div flex items-center>
        <ElIcon color="#9ca3af">
          <Star />
        </ElIcon>
        <span ml-1 text-sm text-gray-4>{{
          invitationInfo.stars === 0 ? '' : invitationInfo.stars
        }}</span>
      </div>
      <div flex items-center mx-3>
        <ElIcon color="#9ca3af">
          <ChatLineSquare />
        </ElIcon>
        <template v-for="(v, k) in commentMap" :key="k">
          <span
            ml-1
            text-sm
            text-gray-4
            v-show="v[0] === invitationInfo.invitation_id"
            >{{ v[1] === 0 ? '' : v[1] }}</span
          >
        </template>
      </div>
      <div flex items-center>
        <ElIcon color="#9ca3af">
          <Timer />
        </ElIcon>
        <span ml-1 text-sm text-gray-4>{{
          $formatTime.format(invitationInfo.createAt)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/Header/components/Avatar.vue'

import { useRouter } from 'vue-router'
import { Star, ChatLineSquare, Timer } from '@element-plus/icons-vue'
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  invitationInfo: InvitationInfo
  commentMap: Map<number, number>
}

const props = defineProps<Props>()
const router = useRouter()
const serverUrl = import.meta.env.VITE_LOCAL_SERVER

const navToArticle = () => {
  router.push({
    name: `detail`,
    params: {
      id: props.invitationInfo.invitation_id,
    },
  })
}
</script>

<style scoped>
.article_title {
  @apply m-0 text-sm line-clamp-2 text-ellipsis cursor-pointer hover:text-blue-4 transition;
}
</style>
