<template>
  <div class="w-6/10 flex flex-col my-40 mx-auto">
    <div flex w-full mt-5>
      <div mr-10>
        <div flex items-center>
          <div class="i-ic-round-info text-4xl text-green-5"></div>
          <h1 my-0 ml-2>职业球员</h1>
        </div>
        <h3 text-second tracking-wider>了解球员的职业生涯</h3>
        <p text-lg text-normal>
          该板块将会介绍职业选手所使用过的装备、获得过的荣誉等内容。
        </p>
      </div>
      <n-carousel
        slides-per-view="auto"
        :space-between="20"
        :loop="false"
        :show-dots="false"
        show-arrow
        draggable
      >
        <n-carousel-item
          style="width: 40%; cursor: pointer"
          v-for="slide in playerList"
          :key="slide.id"
          @click="navToPlayerCareer(slide.id)"
        >
          <img class="carousel-img" :src="serverUrl + slide.smallImg" />
        </n-carousel-item>
      </n-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCarousel, NCarouselItem } from 'naive-ui'
import { useRouter } from 'vue-router'
import type { PlayerItem } from '@/request/api/player/types'

type Props = {
  playerList: PlayerItem[]
}

const props = defineProps<Props>()
const router = useRouter()

const serverUrl = import.meta.env.VITE_STATIC_HOST

// 导航前往个人生涯页
const navToPlayerCareer = (id: number) => {
  router.push({
    path: `/player/${id}/career`,
  })
}
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
