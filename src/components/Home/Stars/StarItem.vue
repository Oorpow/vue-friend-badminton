<template>
  <div class="star_item" @click="navToPlayerCareer">
    <div w-full>
      <ElImage :src="serverUrl + player.smallImg" w-full lazy />
    </div>
    <div class="star_name">
      <span block text-xl>{{ player.name }}</span>
      <span block text-sm>{{ player.cnName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayerItem } from '@/request/api/player/types'
import { useRouter } from 'vue-router'

type Props = {
  player: PlayerItem
}
const props = defineProps<Props>()
const router = useRouter()

const serverUrl = import.meta.env.VITE_LOCAL_SERVER

// 导航前往个人生涯页
const navToPlayerCareer = () => {
  router.push({
    path: `/player/${props.player.id}/career`,
  })
}
</script>

<style scoped>
.star_item {
  @apply w-1/4 p-x-2 cursor-pointer;
}
/* bg-zinc-50 */
.star_item .star_name {
  @apply text-center bg-gray-1 p-y-1;
}

:deep(.el-image) {
  @apply overflow-unset;
}
</style>
