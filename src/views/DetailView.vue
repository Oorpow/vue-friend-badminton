<template>
  <Header />
  <div class="w-9/10 mx-auto mt-3">
    <!-- items-start解决子项继承父元素高度的问题 -->
    <div class="flex my-10 justify-around items-start">
      <!-- left -->
      <div class="w-6/10 flex flex-col p-3 rounded-lg">
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
      <div class="w-35 flex flex-col">
        <div>
          <template v-if="flag">
            <AuthorInfo
              :invitationInfo="getTargetInvitation"
              :isFriend="isFriend"
              :isMySelf="isMySelf"
            />
          </template>
          <div rounded-lg border-1 border-gray-2 dark:border-zinc-7 mt-5>
            <div h-4 rounded-t-lg bg-gray-4 dark:bg-zinc-8 flex items-center>
              <span ml-2 text-white text-sm>相关推荐</span>
            </div>
            <template v-for="item in otherInvitation" :key="item.invitation_id">
              <OtherArticleItem
                :invitationInfo="item"
                :commentMap="commentMap"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import ArticleItem from '@/components/Detail/ArticleItem/ArticleItem.vue'
import OtherArticleItem from '@/components/Detail/OtherArticleItem/OtherArticleItem.vue'
import Comment from '@/components/Detail/Comment/Comment.vue'
import AuthorInfo from '@/components/Detail/AuthorInfo/AuthorInfo.vue'

import { ref, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useInvitationStore } from '@/stores/invitation'
import { useCommentStore } from '@/stores/comment'
import { useFriendStore } from '@/stores/friend'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const invitationStore = useInvitationStore()
const commentStore = useCommentStore()
const friendStore = useFriendStore()
const userStore = useUserStore()
const { getTargetInvitation, otherInvitation } = storeToRefs(invitationStore)
const { commentListWithControl, commentMap } = storeToRefs(commentStore)
const { friendList } = storeToRefs(friendStore)
const { userInfo } = storeToRefs(userStore)

let currentInvitationId = ref(0)
let isFriend = ref(false)
let isMySelf = ref(false)

// 监听params参数的变化
watch(
  router.currentRoute,
  async (newVal) => {
    currentInvitationId.value = Number(newVal.params.id)
    await invitationStore.getInvitationById(currentInvitationId.value)
    await commentStore.getCommentListById(currentInvitationId.value)
    invitationStore.getOtherInvitation(currentInvitationId.value).then(() => {
      commentStore.getAllCommentByOneSelf(otherInvitation.value)
    })

    if (userInfo.value.id) {
      // 判断这个帖子是否是好友写的
      friendStore.getFriendListById(userInfo.value.id).then(() => {
        const result = friendList.value.some(
          (item) =>
            item.friendInfo.id === getTargetInvitation.value.invitation_id
        )
        isMySelf.value =
          getTargetInvitation.value.userInfo.id === userInfo.value.id
        isFriend.value = result
      })
    }
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

<style scoped></style>
