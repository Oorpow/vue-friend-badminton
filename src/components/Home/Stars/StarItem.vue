<template>
  <div class="star_item">
    <div w-full>
      <img
        src="http://www.yonex.cn/public/uploads/20210715/45b86ccfcbea0c6fb7511e92ed2517e1.jpg"
        alt=""
        w-full
      />
    </div>
    <div class="star_name">
      <span block>Viktor Axelsen</span>
      <span block>维克托·阿萨尔森</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.star_item {
  @apply w-1/4;
}
.star_item .star_name {
  @apply bg-zinc-50 text-center;
}
</style>
