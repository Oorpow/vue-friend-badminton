<template>
  <div class="w-6/10 mx-auto">
    <div flex justify-center>
      <h1>近期资讯</h1>
    </div>
    <div flex>
      <n-carousel show-arrow autoplay>
        <div
          class="news_bg relative cursor-pointer overflow-hidden"
          v-for="slide in list"
          :key="slide.invitation_id"
        >
          <n-image
            class="carousel-img relative"
            lazy
            object-fit="cover"
            :src="serverUrl + slide.img"
            fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <div absolute class="mask"></div>
          <div absolute bottom-4 px-5>
            <h3 flex text-white>{{ slide.title }}</h3>
          </div>
        </div>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCarousel, NImage } from 'naive-ui'
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  list: InvitationInfo[]
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
})
const serverUrl = import.meta.env.VITE_LOCAL_SERVER
</script>

<style scoped>
.mask {
  top: 0;
  right: 0;
  left: 0;
  bottom: 6px;
  background-color: rgba(0, 0, 0, 0.2);
}
.carousel-img {
  width: 100%;
  height: 500px;
  /* object-fit: cover; */
}

:deep(.n-image img) {
  width: 100%;
  height: 100%;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
