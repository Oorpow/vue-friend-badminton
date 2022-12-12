<template>
  <div class="w-2/3">
    <NewsItem
      :list="getAll ? invitationList : invitationListByTag"
      :commentMap="commentMap"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useInvitationStore } from '@/stores/invitation'
import { useCommentStore } from '@/stores/comment'

const route = useRoute()

const invitationStore = useInvitationStore()
const commentStore = useCommentStore()
const { invitationListByTag, invitationList } = storeToRefs(invitationStore)
const { commentMap } = storeToRefs(commentStore)

// 默认情况下获取全部帖子
let getAll = ref(true)

watchEffect(() => {
  if (Number(route.params.type) === 0) {
    getAll.value = true
    invitationStore.getInvitationList().then(() => {
      commentStore.getAllCommentByOneSelf(invitationList.value)
    })
  } else {
    getAll.value = false
    // 根据params决定获取不同标签的帖子
    invitationStore.getInvitationByTagId(Number(route.params.type)).then(() => {
      commentStore.getAllCommentByOneSelf(invitationListByTag.value)
    })
  }
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
