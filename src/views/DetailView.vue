<template>
  <Header />
  <div class="detail">
    <div class="detail_main">
      <!-- left -->
      <div class="w-7/10 flex flex-col p-r-3">
        <!-- 文章主体 -->
        <template v-if="flag">
          <ArticleItem :invitationInfo="getTargetInvitation" />
        </template>
        <!-- 评论区 -->
        <Comment
          :commentList="commentListWithControl"
          :currentInvitationId="currentInvitationId"
        />
      </div>
      <!-- 右侧其它文章区域 -->
      <div class="detail_main_right">
        <div>
          <span>其它动态</span>
          <template v-for="item in otherInvitation" :key="item.invitation_id">
            <OtherArticleItem :invitationInfo="item" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useInvitationStore } from '@/stores/invitation'
import { useCommentStore } from '@/stores/comment'

const router = useRouter()
const invitationStore = useInvitationStore()
const commentStore = useCommentStore()
const { getTargetInvitation, otherInvitation } = storeToRefs(invitationStore)
const { commentList, commentListWithControl } = storeToRefs(commentStore)

let currentInvitationId = ref(0)

// 监听params参数的变化
watch(
  router.currentRoute,
  (newVal, oldVal) => {
    currentInvitationId.value = Number(newVal.params.id)
    invitationStore.getInvitationById(Number(currentInvitationId.value))
    invitationStore.getOtherInvitation(Number(currentInvitationId.value))
  },
  {
    immediate: true,
    deep: true,
  }
)

const flag = ref(false)
watchEffect(() => {
  if (getTargetInvitation.value.title != null) {
    flag.value = true
  }
})

commentStore.getCommentListById(currentInvitationId.value)
</script>

<style scoped>
.detail {
  @apply w-8.5/10 mx-auto mt-3;
}
.detail_main {
  @apply flex;
}
.detail_main .detail_main_right {
  @apply flex flex-col flex-1;
}
</style>
