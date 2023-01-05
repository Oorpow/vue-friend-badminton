<template>
  <Header />
  <div class="w-8/10 mx-auto my-10">
    <div v-for="item in matchList" :key="item.month">
      <h3 uppercase>{{ item.month }}</h3>
      <ElTimeline>
        <ElTimelineItem
          v-for="m in item.matchList"
          :key="m.url"
          placement="top"
        >
          <TimeCard :matchInfo="m" />
        </ElTimelineItem>
      </ElTimeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMatchStore } from '@/stores/match'

const matchStore = useMatchStore()

const { matchList } = storeToRefs(matchStore)
matchStore.getMatchThisYear()
</script>

<style scoped></style>
