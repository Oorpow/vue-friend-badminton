<template>
  <div class="stars">
    <div flex justify-center>
      <h2 p-b-2 border-b-blue border-b-4>球员专区</h2>
    </div>
    <div flex w-full mt-5>
      <ElCarousel
        type="card"
        height="400px"
        indicator-position="none"
        style="width: 100%"
      >
        <ElCarouselItem
          v-for="item in playerList"
          :key="item.id"
          @click="navToPlayerCareer(item.id)"
        >
          <ElImage
            :src="serverUrl + item.smallImg"
            :alt="item.name"
            style="width: 100%; height: 100%"
            fit="contain"
          />
        </ElCarouselItem>
      </ElCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { PlayerItem } from '@/request/api/player/types'

type Props = {
  playerList: PlayerItem[]
}

const props = defineProps<Props>()
const router = useRouter()

const serverUrl = import.meta.env.VITE_LOCAL_SERVER

// 导航前往个人生涯页
const navToPlayerCareer = (id: number) => {
  router.push({
    path: `/player/${id}/career`,
  })
}
</script>

<style scoped>
.stars {
  @apply w-9/10 flex flex-col my-20 mx-auto;
}
</style>
