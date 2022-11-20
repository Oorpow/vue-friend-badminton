<template>
  <div class="mx-auto my-5">
    <div w-full flex shadow-xl justify-center>
      <template v-for="(_, tab) in tabs" :key="tab">
        <div
          class="tab_item"
          :class="tab === currentTab ? 'tab_item_span_active' : ''"
          @click="changeTab(tab)"
        >
          <span class="tab_item_span">{{
            tab === 'LatestNews' ? '最新' : '全部'
          }}</span>
        </div>
      </template>
    </div>

    <KeepAlive>
      <component :is="(tabs as any)[currentTab]"></component>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LatestNews from '../LatestNews/LatestNews.vue'
import AllNews from '../AllNews/AllNews.vue'

const tabs = {
  LatestNews,
  AllNews,
}

const currentTab = ref('LatestNews')

const changeTab = (tab: any) => {
  currentTab.value = tab
}
</script>

<style scoped>
.tab_item {
  @apply flex w-1/4 h-8 items-center justify-center border-gray-3 cursor-pointer hover:border-b-3 hover:border-blue-5 transition;
}
.tab_item .tab_item_span {
  @apply block w-5/10 text-center;
}
.tab_item_span_active {
  @apply border-blue-5 border-b-3;
}
</style>
