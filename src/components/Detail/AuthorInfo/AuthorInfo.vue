<template>
  <div bg-white rounded-lg border-1 border-gray-2>
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
          <ElAvatar>{{ invitationInfo.userInfo.name.slice(0, 1) }}</ElAvatar>
          <span ml-2>{{ invitationInfo.userInfo.name }}</span>
        </div>
        <div>
          <p>{{ !isMe ? '该用户很懒，什么都没有留下' : '' }}</p>
        </div>
        <div flex p-b-4 border-b-1 border-gray-2>
          <ElIcon :size="20">
            <Calendar />
          </ElIcon>
          <span text-sm ml-2
            >发布自: {{ $formatTime.format(invitationInfo.createAt) }}</span
          >
        </div>
        <div
          flex
          flex-col
          my-2
          :class="isMe ? '' : 'p-b-2 border-b-1 border-gray-2'"
        >
          <div flex items-center>
            <ElIcon :size="22">
              <View />
            </ElIcon>
            <span ml-2>文章被阅读 1200</span>
          </div>
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
        <div mt-3>
          <template v-if="!isFriendWith && !isMe">
            <ElButton w-full round color="#3b82f6">关注</ElButton>
          </template>
          <template v-else-if="isMe"> </template>
          <template v-else>
            <ElButton
              w-full
              round
              color="#3b82f6"
              :icon="Message"
              @click="navToChat"
              >发消息</ElButton
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import {
  Calendar,
  Message,
  Star,
  StarFilled,
  View,
} from '@element-plus/icons-vue'
import { useInvitationStore } from '@/stores/invitation'
import type { InvitationInfo } from '@/request/api/invitation/types'
import { useUserStore } from '@/stores/user'
import { ElNotification } from 'element-plus'

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

// 进入聊天室发消息
const navToChat = () => {
  router.push(`/message`)
}

// 个人背景的控制
const computeSpaceBg = computed(() => {
  return props.invitationInfo.userInfo.space_bg
    ? `url(${serverUrl + props.invitationInfo.userInfo.space_bg})`
    : '#3b82f6'
})

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
