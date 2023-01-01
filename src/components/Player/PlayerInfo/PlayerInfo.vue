<template>
  <div>
    <span text-xl border-b-1 border-blue>{{ title }}</span>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
}

defineProps<Props>()
</script>

<style scoped></style>
