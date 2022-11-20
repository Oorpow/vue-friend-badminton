<template>
  <Header />
  <div class="home_page">
    <!-- 轮播图 -->
    <Carousel />
    <!-- 球星专区 -->
    <Stars />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Stars from '@/components/Home/Stars/Stars.vue'
</script>

<style scoped>
.home_page {
  @apply w-full m-auto;
}
</style>
