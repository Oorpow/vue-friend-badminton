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
import { onMounted } from 'vue'
</script>

<style scoped>
.home_page {
  @apply w-full m-auto;
}
</style>
