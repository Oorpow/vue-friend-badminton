<template>
  <div my-5>
    <!-- 评论数量 -->
    <div>
      <template v-if="commentList.length !== 0">
        <div>
          <span text-2xl font-bold>评论</span>
          <span ml-1>{{ commentList.length }}</span>
        </div>
      </template>
    </div>
    <!-- 评论区主体 -->
    <div mt-7>
      <!-- 发表评论 -->
      <div w-full flex flex-col>
        <div flex w-full h-6>
          <div w-5>
            <Avatar :username="userInfo.name" :avatar="userInfo.avatar" />
          </div>
          <div
            flex
            w-full
            h-full
            border-b-1
            border-b-gray-3
            dark:border-zinc-7
            p-b-5
          >
            <ElInput
              v-bind="inputConfig"
              v-model="commentForm.content"
              resize="none"
              :disabled="!ableToComment"
              :placeholder="commentPlaceHolder"
            />
            <ElButton
              type="primary"
              style="height: 100%; margin-left: 10px"
              :disabled="!ableToComment || commentForm.content === ''"
              @click="postComment"
              >发表评论</ElButton
            >
          </div>
        </div>
      </div>
      <!-- 用户评论 -->
      <div mt-10>
        <template v-if="!commentList.length">
          <ElEmpty description="暂无评论"></ElEmpty>
        </template>
        <CommentItem
          :commentList="commentList"
          :currentInvitationId="currentInvitationId"
          @showReplyInput="showReplyInput"
        />
      </div>
    </div>
  </div>
  <!-- 超出高度浮现的搜索框 -->
  <Transition appear @before-enter="beforeEnter" @enter="enter">
    <div class="w-5.5/10 fixed bottom-0 z-10" v-show="isShowReplyInput">
      <i class="reply_box absolute w-full h-3 z--1 top--3"></i>
      <div
        class="relative flex flex-col p-5 ml--3 border-t-0.5 border-gray-3 bg-white dark:bg-zinc-8 dark:border-zinc-8"
      >
        <div flex justify-end cursor-pointer @click="isShowReplyInput = false">
          <ElIcon>
            <ArrowDown />
          </ElIcon>
        </div>
        <div flex items-center mt-2>
          <Avatar :username="userInfo.name" :avatar="userInfo.avatar" mr-2 />
          <ElInput v-model="replyForm.content" resize="none" />
          <ElButton
            type="primary"
            @click="replyComment"
            ml-2
            :disabled="replyForm.content === ''"
            >回复</ElButton
          >
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Avatar from '@/components/Header/components/Avatar.vue'
import CommentItem from './components/CommentItem/CommentItem.vue'

import { reactive, computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import gsap from 'gsap'
import { ArrowDown } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import { useCommentStore } from '@/stores/comment'
import type { ICommentForm, ISpecialComment } from '@/request/api/comment/types'

type Props = {
  commentList: ISpecialComment[]
  currentInvitationId: number
}

const props = defineProps<Props>()
const userStore = useUserStore()
const commentStore = useCommentStore()
const { userInfo } = storeToRefs(userStore)

const inputConfig = {
  rows: 2,
  type: 'textarea',
}

const commentForm = reactive<ICommentForm>({
  content: '',
  inv_id: props.currentInvitationId,
  parent_id: null,
  user_id: userInfo.value.id,
})

const ableToComment = computed(() => (userInfo.value.id ? true : false))
const commentPlaceHolder = computed(() =>
  ableToComment.value ? '请发表友善的评论' : '请先登录后再进行评论'
)

// 发表评论
const postComment = () => {
  if (userInfo.value.id) {
    commentStore.createComment(commentForm)
    commentForm.content = ''
  }
}

const replyForm = reactive<ICommentForm>({
  content: '',
  inv_id: props.currentInvitationId,
  parent_id: null,
  user_id: userInfo.value.id,
})
let isShowReplyInput = ref(false)

const showReplyInput = (comment: ISpecialComment) => {
  isShowReplyInput.value = true
  replyForm.parent_id = comment.id
}

// 回复评论
const replyComment = () => {
  if (userInfo.value.id) {
    commentStore.createComment(replyForm)
    replyForm.content = ''
    isShowReplyInput.value = false
  }
}

const beforeEnter = (el: HTMLElement) => {
  el.style.transform = 'translateY(50px)'
  el.style.opacity = '0'
}
const enter = (el: HTMLElement) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.5,
  })
}
</script>

<style scoped>
:deep(.el-textarea__inner) {
  @apply h-6;
}
.reply_box {
  background-color: rgba(0, 0, 0, 0.08);
  filter: blur(10px);
  border-radius: 50%;
}
</style>
