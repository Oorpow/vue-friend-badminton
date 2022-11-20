<template>
  <!-- 球星 -->
  <div class="stars">
    <h2 text-center>知名球手专区</h2>
    <div class="stars_main">
      <StarItem />
    </div>
    <div flex justify-end my-1>
      <div flex items-center>
        <span text-sm cursor-pointer>查看全部</span>
        <span
          class="i-ic-sharp-keyboard-double-arrow-right cursor-pointer"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarItem from './StarItem.vue'
</script>

<style scoped>
.stars {
  @apply w-9/10 flex flex-col my-5 mx-auto;
}
</style>
