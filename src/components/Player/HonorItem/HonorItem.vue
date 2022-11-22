<template>
  <div class="w-1/2 flex items-center mt-7">
    <div
      class="w-5 h-5 rounded-full bg-blue-5 flex items-center justify-center"
    >
      <span text-sm text-white>{{ honor.year }}</span>
    </div>
    <span text-sm ml-1>{{ honor.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IHonorItem } from '@/request/api/player/types'

type Props = {
  honor: IHonorItem
}
defineProps<Props>()
</script>

<style scoped></style>
