<template>
  <Header />
  <div relative>
    <div class="view_bg"></div>
    <div class="absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2">
      <h2 text-white>即将到来的赛事</h2>
    </div>
  </div>

  <div class="w-8/10 mx-auto my-10">
    <div class="w-2/3 mx-auto" v-for="item in matchList" :key="item.month">
      <h3 uppercase>{{ item.month }}</h3>
      <ElTimeline>
        <TransitionGroup appear @beforeEnter="beforeEnter" @enter="enter">
          <ElTimelineItem
            v-for="m in item.matchList"
            :key="m.url"
            placement="top"
            color="#409EFF"
          >
            <TimeCard :matchInfo="m" />
          </ElTimelineItem>
        </TransitionGroup>
      </ElTimeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import TimeCard from '@/components/Match/components/TimeCard.vue'

import { storeToRefs } from 'pinia'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useMatchStore } from '@/stores/match'

gsap.registerPlugin(ScrollTrigger)

const matchStore = useMatchStore()

const { matchList } = storeToRefs(matchStore)
matchStore.getMatchThisYear()

const beforeEnter = (el: Element) => {
  ;(el as HTMLElement).style.transform = 'translateX(100px)'
  ;(el as HTMLElement).style.opacity = '0'
}
const enter = (el: Element) => {
  gsap.to(el, {
    scrollTrigger: el,
    x: 0,
    opacity: 1,
    duration: 0.5,
  })
}
</script>

<style scoped>
.view_bg {
  width: 100%;
  height: 300px;
  background: url(https://extranet.bwfbadminton.com/images/player-hero-01.jpg);
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
