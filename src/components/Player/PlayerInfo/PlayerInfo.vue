<template>
  <div>
    <span text-xl>{{ title }}</span>
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
