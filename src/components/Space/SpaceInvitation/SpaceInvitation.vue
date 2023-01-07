<template>
  <div>
    <div flex flex-wrap items-start>
      <template v-if="postedInvitationList.length || invitationList.length">
        <NewsItem
          :list="userInfo.id ? postedInvitationList : invitationList"
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
    <ElPagination
      background
      layout="prev, pager, next"
      hide-on-single-page
      flex
      justify-center
      :page-size="6"
      v-model:current-page="currentPage"
      :total="totalNum"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useInvitationStore } from '@/stores/invitation'
import { useCommentStore } from '@/stores/comment'

const route = useRoute()
const userStore = useUserStore()
const invitationStore = useInvitationStore()
const commentStore = useCommentStore()

const { userInfo } = storeToRefs(userStore)
const { postedInvitationList, invitationList, totalNum } =
  storeToRefs(invitationStore)
const { commentMap } = storeToRefs(commentStore)

const styleConfig = {
  width: '28%',
  height: '380px',
  marginRight: '2%',
}

let currentPage = ref(1)

watch(
  () => route.params,
  (newVal) => {
    if (userInfo.value.id) {
      invitationStore.getUserPostedInvitationByPage(
        userInfo.value.id,
        currentPage.value
      )
    } else {
      invitationStore.getInvitationList()
    }
  },
  {
    deep: true,
    immediate: true,
  }
)

// 改变页码
const handleCurrentChange = (val: number) => {
  if (userInfo.value.id) {
    invitationStore.getUserPostedInvitationByPage(userInfo.value.id, val)
  } else {
    invitationStore.getInvitationList(currentPage.value)
  }
}
</script>

<style scoped></style>
