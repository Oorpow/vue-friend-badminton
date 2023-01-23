<template>
  <div class="w-6/10 mx-auto mt-20">
    <div text-center>
      <h1 text-primary>关于羽坛在线</h1>
      <p my-8 text-normal leading-7 text-lg>
        羽坛在线是一个供羽球爱好者互动交流的平台，在这里你能够认识许多志同道合的好友、掌握近期的赛事资讯、也可以加入到社区与其他用户互动。
      </p>
    </div>
    <div flex justify-between my-20>
      <Guide :guideList="guideList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Guide from './components/Guide.vue'
import { ref } from 'vue'

interface GuideList {
  id: number
  icon: string
  guideNum: string
  guideText: string
}

const guideList = ref<GuideList[]>([
  {
    id: 1,
    icon: 'i-ic-outline-pan-tool-alt',
    guideNum: '1',
    guideText: '注册账户',
  },
  { id: 2, icon: 'i-ic-outline-edit', guideNum: '2', guideText: '发帖' },
  {
    id: 3,
    icon: 'i-ic-outline-mark-unread-chat-alt',
    guideNum: '3',
    guideText: '好友互动',
  },
])
</script>

<style scoped></style>
