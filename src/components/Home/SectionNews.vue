<template>
  <div class="w-7/10 mx-auto">
    <div flex justify-center>
      <h2 p-b-2 border-b-blue border-b-4>近期资讯</h2>
    </div>
    <div flex overflow-hidden>
      <div
        class="news_bg w-6/10 h-50 bg-center bg-cover relative cursor-pointer"
      >
        <img :src="serverUrl + list[0].img" w-full h-full />
        <div absolute inset-0 class="mask"></div>
        <div absolute bottom-0 px-3>
          <h3 flex text-gray-2>{{ list[0].title }}</h3>
        </div>
      </div>
      <div flex-1 overflow-hidden>
        <div
          class="news_bg h-25 bg-center bg-cover relative cursor-pointer"
          v-for="item in list.slice(1)"
          :key="item.invitation_id"
          overflow-hidden
        >
          <img :src="serverUrl + item.img" w-full h-full />
          <div absolute inset-0 class="mask"></div>
          <div absolute bottom-0 px-3>
            <h4 flex text-gray-2>{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  list: InvitationInfo[]
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
})
const serverUrl = import.meta.env.VITE_LOCAL_SERVER
console.log(props.list)
</script>

<style scoped>
.news_bg img {
  transition: transform 0.3s ease-in-out;
}
.news_bg:hover img {
  transform: scale(1.1);
}
.mask {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
