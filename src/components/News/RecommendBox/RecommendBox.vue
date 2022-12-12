<template>
  <div p-3 border-1 border-gray-2 bg-white rounded-lg mt-5 first:mt-0>
    <slot name="title"></slot>
    <div flex items-center my-3 v-for="item in 3" :key="item">
      <img src="@/assets/images/yonex.png" class="w-6 h-3 bg-cover" />
      <span text-sm ml-2>尤尼克斯</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
