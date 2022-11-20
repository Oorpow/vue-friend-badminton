<template>
  <div class="flex flex-col w-3.5/10 mr-1">
    <div overflow-hidden>
      <img
        :src="news.url"
        alt=""
        w-full
        h-full
        hover:scale-105
        transition
        cursor-pointer
      />
    </div>
    <div class="w-9/10 mx-auto flex flex-col">
      <h4 m-0 hover:text-blue-5 transition cursor-pointer>
        Denmark Open: 'We Stopped Talking for a Day'
      </h4>
      <span text-gray-6 text-sm>Oorpow</span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  news: Object
}

defineProps<Props>()
</script>

<style scoped></style>
