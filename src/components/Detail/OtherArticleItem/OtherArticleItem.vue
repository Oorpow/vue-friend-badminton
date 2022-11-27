<template>
  <div flex my-3 cursor-pointer @click="navToArticle">
    <div class="w-14 h-10 rounded-sm">
      <img :src="serverUrl + invitationInfo.img" alt="" w-full h-full />
    </div>
    <div flex flex-col flex-1 ml-1 justify-between>
      <p class="article_title">
        {{ invitationInfo.title }}
      </p>
      <div flex flex-col>
        <span text-sm text-gray-4>{{ invitationInfo.userInfo.name }}</span>
        <span text-sm text-gray-4>{{ postTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import { useRouter } from 'vue-router'
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  invitationInfo: InvitationInfo
}

const props = defineProps<Props>()
const router = useRouter()
const app = getCurrentInstance()
const serverUrl = import.meta.env.VITE_LOCAL_SERVER

const postTime = computed(() =>
  app?.proxy?.$formatTime.format(props.invitationInfo.createAt)
)

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
