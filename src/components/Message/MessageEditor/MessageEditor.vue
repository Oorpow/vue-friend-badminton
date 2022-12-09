<template>
  <!-- 头部上传区域 -->
  <div>
    <div class="i-ic-outline-image"></div>
  </div>
  <div>
    <el-input
      v-model="msgContent"
      v-bind="inputConfig"
      @keydown.enter="sendMsg"
    />
  </div>
  <div flex justify-end>
    <div>
      <span text-sm text-gray-4>{{ msgContent.length }} / 500</span>
      <el-button ml-2 @click="sendMsg">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useMessageStore } from '@/stores/message'
import { useUserStore } from '@/stores/user'
import { useFriendStore } from '@/stores/friend'
import type { IChatFriend } from '@/request/api/friend/types'
import type { Socket } from 'socket.io-client'

type Props = {
  friend: IChatFriend
}

const props = defineProps<Props>()
const socket = inject('socket') as Socket

const userStore = useUserStore()
const messageStore = useMessageStore()
const friendStore = useFriendStore()
const { userInfo } = storeToRefs(userStore)
const { friendList } = storeToRefs(friendStore)

let msgContent = ref('')

const inputConfig = {
  maxLength: 300,
  placeholder: '',
  type: 'textarea',
  rows: 2,
  resize: 'none',
}

// 发送消息
const sendMsg = async () => {
  // 离线状态, 直接调接口发送离线消息
  if (props.friend.friendInfo.status === 0) {
    await messageStore.sendMsgToFriend(
      userInfo.value.id,
      props.friend.friendInfo.id,
      msgContent.value
    )
    msgContent.value = ''
    await messageStore.getMsgRecordById(
      userInfo.value.id,
      props.friend.friendInfo.id
    )
    messageStore.getAllLastMsg(userInfo.value.id, friendList.value)
  } else {
    await messageStore.sendMsgToFriend(
      userInfo.value.id,
      props.friend.friendInfo.id,
      msgContent.value
    )
    // 对方用户在线，采用socket通信
    socket.emit(
      'private_msg',
      userInfo.value,
      props.friend.friendInfo,
      msgContent.value
    )
    msgContent.value = ''
    await messageStore.getMsgRecordById(
      userInfo.value.id,
      props.friend.friendInfo.id
    )
    messageStore.getAllLastMsg(userInfo.value.id, friendList.value)
  }
}

socket.on('get_private_msg', async (targetId: number) => {
  await messageStore.getMsgRecordById(
    userInfo.value.id,
    props.friend.friendInfo.id
  )

  // 说明正在聊天的好友，和发消息来好友是同一个好友
  if (props.friend.friendInfo.id === targetId) {
    // 正在聊天的情况下，需要不断地修改信息状态
    await messageStore.updateUnreadMsgToRead(
      props.friend.friendInfo.id,
      userInfo.value.id
    )
    await messageStore.getMsgRecordById(
      userInfo.value.id,
      props.friend.friendInfo.id
    )
  }
})
</script>

<style scoped>
:deep(.el-textarea__inner) {
  background: none;
  box-shadow: none;
}
</style>
