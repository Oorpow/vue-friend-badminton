<template>
  <div flex flex-wrap justify-between items-start>
    <template v-if="postedInvitationList.length">
      <NewsItem
        :list="postedInvitationList"
        :commentMap="commentMap"
        :styleConfig="styleConfig"
      />
    </template>
    <template v-else>
      <div mx-auto mt-30>
        <ElEmpty description="该用户还没有开始创作" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useInvitationStore } from '@/stores/invitation'
import { useCommentStore } from '@/stores/comment'

const route = useRoute()
const invitationStore = useInvitationStore()
const commentStore = useCommentStore()

const { postedInvitationList } = storeToRefs(invitationStore)
const { commentMap } = storeToRefs(commentStore)

const styleConfig = {
  width: '28%',
  height: '380px',
}

watch(
  () => route.params,
  (newVal) => {
    invitationStore.getUserPostedInvitation(Number(newVal.id)).then(() => {
      commentStore.getAllCommentByOneSelf(postedInvitationList.value)
    })
  },
  {
    deep: true,
    immediate: true,
  }
)
</script>

<style scoped></style>
