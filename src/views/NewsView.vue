<template>
  <Header />
  <div class="news_page">
    <div class="w-9/10 mx-auto flex justify-between">
      <!-- tabs -->
      <Tabs :tagList="tagList" />
      <!-- 右侧推荐栏 -->
      <div class="w-1/4 flex border-l-1 border-gray-2 px-4 py-3">
        <div>12321</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTagStore } from '@/stores/tag'

const tagStore = useTagStore()
const { tagList } = storeToRefs(tagStore)

tagStore.getTagList()
</script>

<style scoped></style>
