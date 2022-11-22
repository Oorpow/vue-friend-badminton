<template>
  <div class="carousel">
    <el-carousel :interval="2000" arrow="never">
      <el-carousel-item v-for="item in props.list" :key="item.id">
        <el-image :src="serverUrl + item.url" :alt="item.desc" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import type { ICarouselItem } from '@/request/api/carousel/types'

type Props = {
  list: ICarouselItem[]
}

const props = defineProps<Props>()
const serverUrl = import.meta.env.VITE_LOCAL_SERVER
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

:deep(.el-carousel__container) {
  height: 700px;
}
</style>
