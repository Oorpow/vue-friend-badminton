<template>
  <div class="flex flex-col items-center w-1/4 mx-2 first:ml-0">
    <ElImage :src="serverUrl + equipment.img" :alt="equipment.name" w-full />
    <span mt-2>{{ equipment.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Equipment } from '@/request/api/player/types'

type Props = {
  equipment: Equipment
}
defineProps<Props>()
const serverUrl = import.meta.env.VITE_LOCAL_SERVER
</script>

<style scoped></style>
