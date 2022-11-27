<template>
  <div class="latest">
    <div class="latest_main">
      <template v-if="flag">
        <!-- 大动态 -->
        <div flex justify-between>
          <BigNews :invitation="getFirstInvitation" />
        </div>
        <!-- 底部三小动态 -->
        <div flex mt-1 justify-between>
          <template v-for="news in invitationList.slice(1, 4)" :key="news.id">
            <NewsItem :news="news" />
          </template>
        </div>
      </template>
      <template v-else>
        <div>loading...</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useInvitationStore } from '@/stores/invitation'

const store = useInvitationStore()
const { invitationList, getFirstInvitation } = storeToRefs(store)
store.getInvitationList()

const flag = ref(false)
// 当监听到有数据时，再传入模板进行解析
watchEffect(() => {
  if (getFirstInvitation.value) {
    flag.value = true
  }
})
</script>

<style scoped>
.latest {
  @apply w-8/10 mx-auto mt-10;
}
</style>
