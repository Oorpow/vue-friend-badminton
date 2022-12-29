<template>
  <Header />
  <div class="home_page">
    <!-- 背景 -->
    <div class="home_page_bg relative">
      <div class="absolute top-1/3 left-20">
        <h1 text-white mb-5>
          {{ isLogin ? '发表帖子, 分享趣事' : '加入社区, 以球会友' }}
        </h1>
        <ElButton round color="#3b82f6" @click="navToRoute"
          >立即{{ isLogin ? '发表' : '加入' }}</ElButton
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
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { usePlayerStore } from '@/stores/player'
import { useUserStore } from '@/stores/user'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const userStore = useUserStore()
const playerStore = usePlayerStore()

const { userInfo } = storeToRefs(userStore)
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

// const isLogin = ref(false)
// watchEffect(() => {
//   console.log(userInfo.value)

//   if (userInfo.value.id) {
//     isLogin.value = true
//   } else {
//     isLogin.value = false
//   }
// })
const isLogin = computed(() => (userInfo.value.id ? true : false))

const navToRoute = () => {
  router.push(isLogin.value ? '/produce' : '/login')
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
