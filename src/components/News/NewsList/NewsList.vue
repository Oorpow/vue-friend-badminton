<template>
  <div min-h-60>
    <NewsItem :list="list" :commentMap="commentMap" />
  </div>
</template>

<script setup lang="ts">
import NewsItem from './components/NewsItem.vue'

import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  list: InvitationInfo[]
  commentMap: any
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  commentMap: new Map(),
})
</script>

<style scoped>
.tab_item {
  /* @apply flex w-1/4 h-8 items-center justify-center border-gray-3 cursor-pointer hover:border-b-3 hover:border-blue-5 transition; */
}
.tab_item .tab_item_span {
  /* @apply block w-5/10 text-center; */
}
.tab_item_span_active {
  /* @apply border-blue-5 border-b-3; */
}
</style>
