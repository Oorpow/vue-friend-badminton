<template>
  <div flex h-20 shadow-xl>
    <div>
      <img :src="matchInfo.logo" w-20 h-20 />
    </div>
    <div bg-black relative flex flex-1 items-center>
      <div absolute inset-0 overflow-hidden z-1>
        <img
          src="https://extranet.bwfbadminton.com/images/player-hero-01.jpg"
          alt="bwf"
          w-full
          h-full
        />
      </div>
      <div class="w-9/10 px-3 absolute z-2">
        <span block text-white font-bold text-lg>{{ matchInfo.name }}</span>
        <span block mt-5 text-white>{{ matchInfo.location }}</span>
      </div>
      <div absolute top-0 right-0 uppercase bg-red-6 text-white p-3>
        {{ matchInfo.date }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMatchInfo } from '@/request/api/match/types'

type Props = {
  matchInfo: IMatchInfo
}

const props = defineProps<Props>()
console.log(props.matchInfo)
</script>

<style scoped></style>
