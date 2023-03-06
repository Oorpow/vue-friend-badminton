<template>
  <div class="header">
    <div
      class="flex items-center h-full w-9.5/10 md:justify-between lg:w-full lg:justify-around"
    >
      <!-- left -->
      <div class="flex w-1/3 items-center lg:ml-10">
        <div
          class="cursor-pointer sm:block lg:hidden"
          @click="isShowInMd = !isShowInMd"
        >
          <ElIcon size="25"><Operation /></ElIcon>
        </div>
        <!-- logo -->
        <div
          class="mr-4 cursor-pointer hidden lg:block"
          @click="navToTargetRoute('/')"
        >
          <img src="@/assets/images/logo/logo.png" alt="badminton logo" />
        </div>
        <!-- 路由 -->
        <div class="hidden lg:block">
          <ul flex>
            <li
              class="menu_item relative"
              v-for="(item, i) in navList"
              :key="i"
            >
              <span
                mx-3
                cursor-pointer
                font-bold
                text-lg
                @click="navToTargetRoute(item.path)"
                >{{ item.name }}</span
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- logo show when md, hidden when lg -->
      <div
        class="mr-4 cursor-pointer flex flex-1 justify-center lg:hidden"
        @click="navToTargetRoute('/')"
      >
        <img src="@/assets/images/logo/logo.png" alt="badminton logo" />
      </div>
      <!-- search -->
      <div class="w-1/3 relative hidden lg:block">
        <SearchBox
          v-model="searchModelValue"
          :invitationList="invitationSearchList"
          :userList="userList"
        />
      </div>
      <!-- settings -->
      <div class="flex flex-1 items-center justify-end lg:mr-10">
        <!-- 已登录 -->
        <template v-if="getToken !== ''">
          <Avatar :username="userInfo.name" :avatar="userInfo.avatar" />
          <!-- 设置菜单 -->
          <SettingOptions />
          <!-- 消息提醒 -->
          <NotifyMessage
            :unreadNums="numOfUnRead"
            :receiveList="getFriendBellList"
          />
        </template>
        <!-- 未登录 -->
        <template v-else>
          <ElButton type="primary" @click="$router.push('/login')"
            >登录账户</ElButton
          >
        </template>
      </div>
    </div>
  </div>
  <!-- navList show when md -->
  <div class="w-full absolute top-15 z-10 bg-white" v-show="isShowInMd">
    <div class="flex flex-col items-center">
      <div class="w-9.5/10 relative my-5">
        <SearchBox
          v-model="searchModelValue"
          :invitationList="invitationSearchList"
          :userList="userList"
        />
      </div>
      <div
        class="w-9.5/10 py-2 border-t-1 border-gray-200"
        v-for="(nav, i) in navList"
        :key="i"
      >
        <span
          mx-3
          cursor-pointer
          font-bold
          text-lg
          hover:text-blue-300
          @click="navToTargetRoute(nav.path)"
          >{{ nav.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBox from './components/SearchBox/SearchBox.vue'
import SettingOptions from './components/SettingOptions.vue'
import NotifyMessage from './components/NotifyMessage.vue'
import Avatar from './components/Avatar.vue'

import { ref, inject, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElNotification } from 'element-plus'
import { Operation } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import { useFriendStore } from '@/stores/friend'
import { useMessageStore } from '@/stores/message'
import { useInvitationStore } from '@/stores/invitation'
import type { Socket } from 'socket.io-client'
import type { IFriendReq } from '@/request/api/friend/types'

const socket: Socket = inject('socket') as Socket

const router = useRouter()
const store = useUserStore()
const friendStore = useFriendStore()
const messageStore = useMessageStore()
const invitationStore = useInvitationStore()
const { userInfo, getToken, userList } = storeToRefs(store)
const { getFriendBellList } = storeToRefs(friendStore)
const { numOfUnRead } = storeToRefs(messageStore)
const { invitationSearchList } = storeToRefs(invitationStore)

let isShowInMd = ref(false)

const navList = [
  {
    path: '/news/0',
    name: '社区动态',
  },
  {
    path: '/match',
    name: '近期赛事',
  },
]
// 搜索框的关键字
let searchModelValue = ref('')

watch(
  () => searchModelValue.value,
  async (newVal) => {
    if (newVal !== '') {
      await store.getUserByName(searchModelValue.value)
      await invitationStore.getInvitationBySearchVal(searchModelValue.value)
    }
  }
)

const navToTargetRoute = (path: string) => {
  router.push(path)
}

watchEffect(() => {
  // 若用户已经登录，则开启socket连接
  if (getToken.value !== '') {
    friendStore.getFriendReceiveList(userInfo.value.id)
    // 获取未处理的好友请求列表
    friendStore.getFriendReceiveUnHandle(userInfo.value.id)
    messageStore.getNumOfAllUnRead(userInfo.value.id)

    socket.connect()
    // 提示server，用户已经上线
    socket.emit('online', userInfo.value)

    // 监听到有好友上下线
    socket.on('line_status_change', (friendName: string, isOnline: boolean) => {
      // 刷新好友状态
      friendStore.getFriendListById(userInfo.value.id)
      if (isOnline) {
        ElNotification({
          title: `用户${friendName}上线了`,
          type: 'info',
        })
      }
    })

    // 监听好友请求发送是否成功
    socket.on('send_req_result', (flag: boolean, msg: string) => {
      ElNotification({
        title: msg,
        type: `${flag}` ? 'success' : 'warning',
      })
    })

    // 重复发送好友请求
    socket.on('send_req_repeat', (msg: string) => {
      ElNotification({
        title: msg,
        type: 'success',
      })
    })

    // 监听是否有新的好友请求
    socket.on('receive_req', async (opposite: IFriendReq) => {
      // 如果有新的好友请求，需要重新获取一下小铃铛的提醒信息
      friendStore.getFriendReceiveUnHandle(userInfo.value.id)

      ElNotification({
        title: '你有一条新的好友请求',
        message: `用户名: ${opposite.name}`,
        type: 'info',
      })
    })

    // 监听己方是否已经处理了好友申请
    socket.on('req_handle_done_self', () => {
      // 己方已处理，则刷新小铃铛的提醒信息
      friendStore.getFriendReceiveUnHandle(userInfo.value.id)
    })

    socket.on('get_private_msg', () => {
      messageStore.getNumOfAllUnRead(userInfo.value.id)
    })
  }
})
</script>

<style scoped>
.header {
  box-shadow: 0px 4px 8px rgba(178, 199, 210, 0.3);
  @apply flex justify-center items-center relative z-3 h-6;
}
.menu_item span::before {
  content: '';
  position: absolute;
  left: 15px;
  right: 15px;
  height: 2px;
  bottom: 0;
  background-color: #0096d6;
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}
.menu_item span:hover {
  color: #0096d6;
}
.menu_item span:hover::before {
  transform: scale(1);
}
</style>
