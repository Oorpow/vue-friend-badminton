<template>
  <div rounded-lg border-1 border-gray-2 dark:border-zinc-7>
    <div>
      <div
        w-full
        h-6
        rounded-t-lg
        :style="{
          background: computeSpaceBg,
        }"
      ></div>
      <div p-3>
        <div flex items-center>
          <Avatar
            :username="invitationInfo.userInfo.name"
            :avatar="invitationInfo.userInfo.avatar"
          />
          <div flex flex-col ml-2>
            <span dark:text-zinc-3>{{ invitationInfo.userInfo.name }}</span>
            <span text-sm text-gray>{{
              invitationInfo.userInfo.description
            }}</span>
          </div>
        </div>
        <div flex mt-2 p-b-4 border-b-1 border-gray-2 dark:border-zinc-7>
          <ElIcon :size="20">
            <Calendar />
          </ElIcon>
          <span text-sm ml-2 dark:text-zinc-3
            >发布自: {{ $formatTime.format(invitationInfo.createAt) }}</span
          >
        </div>
        <div
          flex
          flex-col
          my-2
          dark:border-zinc-7
          :class="isMe ? '' : 'p-b-2 border-b-1 border-gray-2'"
        >
          <div flex items-center>
            <ElIcon
              :size="22"
              @click="handleStar(invitationInfo.invitation_id)"
              class="cursor-pointer"
              :color="
                isStarred(userInfo.id, invitationInfo.invitation_id)
                  ? '#f6bf48'
                  : '#000'
              "
            >
              <StarFilled
                v-if="
                  userInfo.id &&
                  isStarred(userInfo.id, invitationInfo.invitation_id)
                "
              />
              <Star v-else />
            </ElIcon>
            <span ml-2>获得Star {{ invitationInfo.stars }}</span>
          </div>
        </div>
        <div mt-3 v-has-auth="userInfo.id">
          <ElButton
            w-full
            round
            color="#3b82f6"
            @click="
              navToRoute(
                computeButtonText === ButtonText.chat
                  ? '/message'
                  : `/space/${userInfo.id}`
              )
            "
            >{{ computeButtonText }}</ElButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/Header/components/Avatar.vue'

import { watch, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElNotification } from 'element-plus'
import { Calendar, Star, StarFilled, View } from '@element-plus/icons-vue'
import { useInvitationStore } from '@/stores/invitation'
import { useUserStore } from '@/stores/user'
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  invitationInfo: InvitationInfo
  isFriend: boolean
  isMySelf: boolean
}

const props = defineProps<Props>()

const router = useRouter()
const userStore = useUserStore()
const invitationStore = useInvitationStore()
const { userInfo } = storeToRefs(userStore)
const { starredList } = storeToRefs(invitationStore)

const serverUrl = import.meta.env.VITE_LOCAL_SERVER
const isFriendWith = ref(false)
const isMe = ref(false)

watch(
  () => [props.isFriend, props.isMySelf],
  (newVal) => {
    isFriendWith.value = newVal[0]
    isMe.value = newVal[1]
  }
)

// 个人背景的控制
const computeSpaceBg = computed(() => {
  return props.invitationInfo.userInfo.space_bg
    ? `url(${serverUrl + props.invitationInfo.userInfo.space_bg})`
    : '#3b82f6'
})

enum ButtonText {
  follow = '关注',
  space = '我的空间',
  chat = '发消息',
}

const computeButtonText = computed(() => {
  let val = ''

  if (!isFriendWith.value && !isMe.value) {
    val = ButtonText.follow
  } else if (isMe.value) {
    val = ButtonText.space
  } else {
    val = ButtonText.chat
  }
  return val
})

const navToRoute = (path: string) => {
  router.push(path)
}

if (userInfo.value.id) {
  invitationStore.findAllStarredInvitation(userInfo.value.id)
}

const isStarred = (userId: number, invitationId: number) => {
  return starredList.value.some(
    (item) => item.user_id === userId && item.invitation_id === invitationId
  )
}

// 点赞/取消点赞
const handleStar = async (invitationId: number) => {
  if (!userInfo.value.id) {
    ElNotification({
      title: '请先登录再进行star',
      type: 'info',
    })
  } else {
    const starred = isStarred(userInfo.value.id, invitationId)
    await invitationStore.starOrUnstarInvitationById(
      userInfo.value.id,
      invitationId,
      starred ? 0 : 1
    )
    await invitationStore.getInvitationById(invitationId)
    await invitationStore.findAllStarredInvitation(userInfo.value.id)
  }
}
</script>

<style scoped></style>
