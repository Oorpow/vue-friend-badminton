<template>
  <Header />
  <div class="home_page">
    <!-- 轮播图 -->
    <Carousel :list="carouselList" />
    <!-- 球星专区 -->
    <Stars :playerList="playerList" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCarouselStore } from '@/stores/carousel'
import { usePlayerStore } from '@/stores/player'

const carouselStore = useCarouselStore()
const playerStore = usePlayerStore()

const { carouselList } = storeToRefs(carouselStore)
const { playerList } = storeToRefs(playerStore)

carouselStore.getCarouselList()
playerStore.getPlayerList()
</script>

<style scoped>
.home_page {
  @apply w-full m-auto;
}
</style>
