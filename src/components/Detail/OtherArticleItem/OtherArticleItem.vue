<template>
  <div flex my-3>
    <div class="w-14 h-10 rounded-sm">
      <img
        src="https://bwfworldtour.bwfbadminton.com/wp-content/uploads/2022/11/YFO_Loh-Kean-Yew-308x239.jpg"
        alt=""
        w-full
        h-full
      />
    </div>
    <div flex flex-col flex-1 ml-1>
      <p class="article_title">
        Race to Guangzhou: Countdown for Qualifiers Begins
      </p>
      <div flex flex-col>
        <span text-sm text-gray-4>username</span>
        <span text-sm text-gray-4>2022-10-22</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.article_title {
  @apply m-0 text-sm line-clamp-2 text-ellipsis cursor-pointer hover:text-blue-4 transition;
}
</style>
