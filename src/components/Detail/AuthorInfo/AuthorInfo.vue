<template>
  <div bg-white rounded-lg border-1 border-gray-2>
    <div>
      <div w-full h-2 bg-blue-5 rounded-t-lg></div>
      <div p-3>
        <div flex items-center>
          <ElAvatar>{{ invitationInfo.userInfo.name.slice(0, 1) }}</ElAvatar>
          <span ml-2>{{ invitationInfo.userInfo.name }}</span>
        </div>
        <div>
          <p>该用户很懒，什么都没有留下</p>
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
            <ElIcon :size="22"> <Star /> </ElIcon>
            <span ml-2>获得Star {{ invitationInfo.stars }}</span>
          </div>
        </div>
        <div mt-3>
          <template v-if="!isFriendWith && !isMe">
            <ElButton w-full round color="#3b82f6">关注</ElButton>
          </template>
          <template v-else>
            <ElButton w-full round color="#3b82f6" @click="navToChat"
              >发消息</ElButton
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Calendar, Star, View } from '@element-plus/icons-vue'
import type { InvitationInfo } from '@/request/api/invitation/types'

type Props = {
  invitationInfo: InvitationInfo
  isFriend: boolean
  isMySelf: boolean
}

const props = defineProps<Props>()

const router = useRouter()

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
</script>

<style scoped></style>