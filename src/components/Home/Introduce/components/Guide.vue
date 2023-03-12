<template>
  <div
    flex
    flex-col
    justify-center
    items-center
    v-for="item in guideList"
    :key="item.id"
  >
    <div
      :class="item.icon"
      class="text-5xl text-primary text-center dark:text-slate-400"
    ></div>
    <div>
      <h1 class="text-center text-primary dark:text-slate-400">
        {{ item.guideNum }}
      </h1>
      <span class="text-primary text-2xl font-bold dark:text-slate-400">{{
        item.guideText
      }}</span>
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
