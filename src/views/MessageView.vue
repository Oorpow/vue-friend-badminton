<template>
  <Header />
  <div class="message_main relative">
    <!-- 消息框 -->
    <div class="middleBox w-9.5/10 lg:w-8/10 flex flex-col mx-auto">
      <!-- 主体 -->
      <div
        class="shadow-lg border-1 border-gray-3 dark:border-zinc-8 dark:bg-zinc-9 rounded flex h-60 lg:h-75"
      >
        <!-- 左侧好友列表 -->
        <div class="friend_list">
          <!-- 面板切换 -->
          <div
            w-6
            bg-gray
            border-r-1
            border-gray-3
            dark:border-zinc-8
            dark:bg-zinc-9
            flex
            flex-col
            items-center
          >
            <div
              py-3
              cursor-pointer
              v-for="iconItem in chatIconList"
              :key="iconItem.id"
              @click="changePanel(iconItem)"
            >
              <ElIcon
                :size="iconItem.size"
                :style="{
                  color: currentPanel === iconItem.comName ? 'green' : 'white',
                }"
              >
                <template v-if="iconItem.id === 1">
                  <ElBadge :value="numOfUnRead === 0 ? '' : numOfUnRead" ml-2>
                    <ChatRound />
                  </ElBadge>
                </template>
                <template v-else>
                  <ElBadge
                    :value="
                      friendBellList.length === 0 ? '' : friendBellList.length
                    "
                    ml-2
                  >
                    <User />
                  </ElBadge>
                </template>
              </ElIcon>
            </div>
          </div>
          <!-- 好友列表 -->
          <div class="friend_list_container">
            <SearchExistFriend v-model="searchUserByName" />
            <template v-if="friendListBySearch.length">
              <FriendItemSearched
                :list="friendListBySearch"
                :strangers="userList"
              />
            </template>
            <template v-else>
              <FriendItem
                :friendList="friendList"
                :lastMsgList="lastMsgList"
                :unreadMap="unreadMap"
                @chooseFriend="chooseFriend"
              />
            </template>
          </div>
        </div>
        <!-- 右侧聊天框 -->
        <div flex-1>
          <component
            :is="currentPanel"
            :friend="currentChatTarget"
            :msgList="msgList"
            :reqList="friendReceiveList"
            :userInfo="userInfo"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import SearchExistFriend from '@/components/Message/SearchExistFriend/SearchExistFriend.vue'
import FriendItemSearched from '@/components/Message/FriendItemSearched/FriendItemSearched.vue'
import FriendItem from '@/components/Message/FriendItem/FriendItem.vue'
import MessageBox from '@/components/Message/MessageBox/MessageBox.vue'
import FriendRequest from '@/components/Message/FriendRequest/FriendRequest.vue'

import {
  onMounted,
  reactive,
  inject,
  markRaw,
  shallowRef,
  ref,
  watch,
} from 'vue'
import { storeToRefs } from 'pinia'
import { ElNotification } from 'element-plus'
import { ChatRound, User } from '@element-plus/icons-vue'
import { useFriendStore } from '@/stores/friend'
import { useUserStore } from '@/stores/user'
import type { IChatFriend, IFriendItem } from '@/request/api/friend/types'
import type { Socket } from 'socket.io-client'
import { useMessageStore } from '@/stores/message'

const socket = inject('socket') as Socket

const friendStore = useFriendStore()
const userStore = useUserStore()
const messageStore = useMessageStore()
const { friendList, friendReceiveList, friendListBySearch, friendBellList } =
  storeToRefs(friendStore)
const { userInfo, userList } = storeToRefs(userStore)
const { msgList, lastMsgList, unreadMap, numOfUnRead } =
  storeToRefs(messageStore)

const chatIconList = [
  { id: 1, comName: markRaw(MessageBox), size: 25 },
  { id: 2, comName: markRaw(FriendRequest), size: 25 },
]

const currentPanel = shallowRef(MessageBox)

const changePanel = (panel: any) => {
  currentPanel.value = panel.comName
}

// 当前选择聊天的好友
const currentChatTarget = reactive<IChatFriend>({
  friendInfo: {} as IFriendItem,
})

// 用户已登录
if (userInfo.value.id) {
  // 获取用户的好友列表
  friendStore.getFriendListById(userInfo.value.id).then(() => {
    // 获取聊天记录中的最后一条信息
    messageStore.getAllLastMsg(userInfo.value.id, friendList.value)
    // 获取未读的消息记录数
    messageStore.getNoReadMsgWithAllUser(userInfo.value.id, friendList.value)
  })
}

// 选择一位好友作为聊天对象
const chooseFriend = async (friendInfo: IFriendItem) => {
  currentChatTarget.friendInfo = Object.assign({}, friendInfo)
  messageStore.getMsgRecordById(userInfo.value.id, friendInfo.id)
  // 将与该好友的未读信息置为已读
  await messageStore.updateUnreadMsgToRead(friendInfo.id, userInfo.value.id)
  messageStore.getNoReadMsgWithAllUser(userInfo.value.id, friendList.value)
  messageStore.getNumOfAllUnRead(userInfo.value.id)
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
  socket.on('get_private_msg', () => {
    messageStore.getAllLastMsg(userInfo.value.id, friendList.value)
    messageStore.getNoReadMsgWithAllUser(userInfo.value.id, friendList.value)
  })
})

friendStore.getFriendReceiveList(userInfo.value.id)

let searchUserByName = ref('')

watch(
  () => searchUserByName.value,
  async (newVal) => {
    if (newVal !== '') {
      await friendStore.getFriendBySearch(userInfo.value.id, newVal)
      await userStore.getUserByName(newVal)
      // 排列出陌生人列表
      friendList.value.forEach((item, i) => {
        userList.value.forEach((user, index) => {
          if (item.friendInfo.id === user.id) {
            userList.value.splice(index, 1)
          }
        })
      })
    } else {
      friendListBySearch.value.length = 0
    }
  }
)
</script>

<style scoped>
.message_main {
  width: 100%;
  height: calc(100vh - 60px);
  /* background: rgb(243, 243, 243); */
}

.message_main .message_main_head {
  @apply my-3 bg-white p-3 rounded flex justify-between items-center;
}

.message_main .friend_list {
  @apply w-25 flex border-r-1 border-gray-3 dark:border-zinc-8;
}

.message_main .friend_list_container::-webkit-scrollbar {
  @apply w-1;
}

.message_main .friend_list_container::-webkit-scrollbar-thumb {
  @apply border-1 border-gray-2 bg-gray-2 rounded-lg;
}
:deep(.el-badge) {
  --el-badge-padding: 4px;
  --el-badge-size: 14px;
}
:deep(.el-badge__content.is-fixed) {
  right: 15px;
}

.middleBox {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
</style>
