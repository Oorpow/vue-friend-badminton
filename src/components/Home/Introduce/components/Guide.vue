<template>
  <div
    flex
    flex-col
    justify-center
    items-center
    v-for="item in guideList"
    :key="item.id"
  >
    <div :class="item.icon" class="text-5xl text-primary text-center"></div>
    <div>
      <h1 text-center text-primary>{{ item.guideNum }}</h1>
      <span text-primary text-2xl font-bold>{{ item.guideText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  guideList: GuideList[]
}

interface GuideList {
  id: number
  icon: string
  guideNum: string
  guideText: string
}

const props = defineProps<Props>()
</script>

<style scoped></style>
