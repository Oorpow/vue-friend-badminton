<template>
  <Header />
  <div></div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMatchStore } from '@/stores/match'

const matchStore = useMatchStore()

const { matchList } = storeToRefs(matchStore)
matchStore.getMatchThisYear().then(() => {
  matchList.value.forEach((item) => {
    console.log(item.matchList)
  })
})
</script>

<style scoped></style>
