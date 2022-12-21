<template>
  <Header />
  <div class="home_page">
    <!-- 背景 -->
    <div class="home_page_bg relative">
      <div class="absolute top-1/3 left-20">
        <h1 text-white mb-5>加入社区, 以球会友</h1>
        <ElButton round color="#3b82f6" @click="$router.push('/login')"
          >立即加入</ElButton
        >
      </div>
    </div>
    <!-- 球员 -->
    <Transition appear @before-enter="beforeEnter" @enter="enter">
      <Stars :playerList="playerList" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { usePlayerStore } from '@/stores/player'

gsap.registerPlugin(ScrollTrigger)

const playerStore = usePlayerStore()

const { playerList } = storeToRefs(playerStore)

playerStore.getPlayerList()

const beforeEnter = (el: HTMLElement) => {
  el.style.transform = 'translateY(100px)'
  el.style.opacity = '0'
}
const enter = (el: HTMLElement) => {
  gsap.to(el, {
    scrollTrigger: el,
    y: 0,
    opacity: 1,
    duration: 0.5,
  })
}
</script>

<style scoped>
.home_page {
  @apply w-full m-auto relative;
}
.home_page .home_page_bg {
  height: 500px;
  background: url('/src/assets/images/home-bg/bg.jpg');
  background-position: 50%;
}
</style>
