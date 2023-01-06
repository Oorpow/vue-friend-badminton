<template>
  <div flex h-20 shadow-xl>
    <div>
      <img :src="matchInfo.logo" w-20 h-20 />
    </div>
    <div bg-black relative flex flex-1 items-center>
      <div absolute inset-0 overflow-hidden z-1>
        <img :src="computeMatchBg" alt="bwf" w-full h-full />
      </div>
      <div class="w-9/10 px-3 absolute z-2">
        <span block text-white font-bold text-lg>{{ matchInfo.name }}</span>
        <span block mt-5 text-white>{{ matchInfo.location }}</span>
      </div>
      <div
        absolute
        top-0
        right-0
        uppercase
        bg-red-6
        text-white
        font-bold
        p-3
        z-2
      >
        {{ matchInfo.date }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IMatchInfo } from '@/request/api/match/types'

type Props = {
  matchInfo: IMatchInfo
}

const props = defineProps<Props>()

const computeMatchBg = computed(() => {
  let url = 'https://extranet.bwfbadminton.com/images/player-hero-01.jpg'
  if (props.matchInfo.header_url) {
    url = props.matchInfo.header_url
  }
  return url
})
console.log(props.matchInfo)
</script>

<style scoped></style>
