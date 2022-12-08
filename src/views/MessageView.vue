<template>
  <Header />
  <div class="message_main">
    <!-- 消息框 -->
    <div class="w-8/10 flex flex-col mx-auto">
      <!-- 头部 -->
      <div class="message_main_head">
        <span text-sm text-gray-4>我的消息</span>
        <FriendSearch />
      </div>
      <!-- 主体 -->
      <div bg-white rounded flex h-75>
        <!-- 左侧好友列表 -->
        <div class="friend_list">
          <div p-3>
            <span text-sm text-gray-4>近期消息</span>
          </div>
          <!-- 好友列表 -->
          <div class="friend_list_container">
            <FriendItem
              :friendList="friendList"
              :lastMsgList="lastMsgList"
              @chooseFriend="chooseFriend"
            />
          </div>
        </div>
        <!-- 右侧聊天框 -->
        <div flex-1>
          <MessageBox :friend="currentChatTarget" :msgList="msgList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { ElNotification } from 'element-plus'
import { useFriendStore } from '@/stores/friend'
import { useUserStore } from '@/stores/user'
import type { IChatFriend, IFriendItem } from '@/request/api/friend/types'
import type { Socket } from 'socket.io-client'
import { useMessageStore } from '@/stores/message'

const socket = inject('socket') as Socket

const friendStore = useFriendStore()
const userStore = useUserStore()
const messageStore = useMessageStore()
const { friendList } = storeToRefs(friendStore)
const { userInfo } = storeToRefs(userStore)
const { msgList, lastMsgList } = storeToRefs(messageStore)

// 当前选择聊天的好友
const currentChatTarget = reactive<IChatFriend>({
  friendInfo: {} as IFriendItem,
})

// 用户已登录
if (userInfo.value.id) {
  friendStore.getFriendListById(userInfo.value.id).then(() => {
    currentChatTarget.friendInfo = Object.assign(
      {},
      friendList.value[0].friendInfo
    )
    // 好友列表加载完毕后，直接加载与列表第一位好友的聊天记录
    messageStore.getMsgRecordById(
      userInfo.value.id,
      currentChatTarget.friendInfo.id
    )
    messageStore.getAllLastMsg(userInfo.value.id, friendList.value)
  })
}

// 选择一位好友作为聊天对象
const chooseFriend = (friendInfo: IFriendItem) => {
  currentChatTarget.friendInfo = Object.assign({}, friendInfo)
  messageStore.getMsgRecordById(userInfo.value.id, friendInfo.id)
}

onMounted(() => {
  // 监听对方是否同意己方的好友请求，如果同意则需要发请求刷新一下好友列表
  socket.on('req_handle_done', async (name, isAccept) => {
    if (isAccept) {
      ElNotification({
        title: `${name}已同意了你的好友请求`,
        type: 'success',
      })
      await friendStore.getFriendListById(userInfo.value.id)
    }
  })
})
</script>

<style scoped>
.message_main {
  width: 100%;
  height: calc(100vh - 60px);
  background: url('https://wallpapercave.com/wp/wp1852919.jpg') no-repeat;
  background-size: cover;
}

.message_main .message_main_head {
  @apply my-3 bg-white p-3 rounded flex justify-between items-center;
}

.message_main .friend_list {
  @apply w-25 flex flex-col mx-auto b-r-1 border-gray-2;
}

.message_main .friend_list_container {
  @apply overflow-auto;
}

.message_main .friend_list_container::-webkit-scrollbar {
  @apply w-1;
}

.message_main .friend_list_container::-webkit-scrollbar-thumb {
  @apply border-1 border-gray-2 bg-gray-2 rounded-lg;
}
</style>
