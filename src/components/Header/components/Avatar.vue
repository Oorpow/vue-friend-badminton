<template>
  <div>
    <ElAvatar :style="configStyle" :size="size" v-if="!avatar" :shape="shape">{{
      username && username.slice(0, 1)
    }}</ElAvatar>
    <ElAvatar
      :style="configStyle"
      :size="size"
      :src="serverUrl + avatar"
      v-else
    />
  </div>
</template>

<script setup lang="ts">
type Props = {
  username?: string
  avatar?: string
  configStyle?: object
  size?: number
  shape?: 'circle' | 'square'
}

withDefaults(defineProps<Props>(), {
  size: 35,
  shape: 'circle',
})

const serverUrl = import.meta.env.VITE_LOCAL_SERVER
</script>

<style scoped></style>
