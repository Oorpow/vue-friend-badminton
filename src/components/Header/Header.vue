<template>
  <div class="header">
    <div class="w-1/4">LOGO</div>
    <div>
      <template v-for="(item, i) in navList" :key="i">
        <span mx-1 cursor-pointer>{{ item }}</span>
      </template>
    </div>
    <div class="flex items-center">
      <template v-if="store.getToken !== ''">
        <!-- 消息提醒 -->
        <NotifyMessage :receiveList="getFriendBellList" />
        <ElAvatar>{{ userInfo.name.slice(0, 1) }}</ElAvatar>
        <!-- 发布帖子 -->
        <ElButton ml-2 @click="navToProduceView">投稿</ElButton>
      </template>
      <template v-else>
        <!-- 未登录 -->
        <ElButton @click="isShowDialog = true">登录</ElButton>
      </template>
    </div>
  </div>
  <Teleport to="body">
    <div>
      <Login v-model:isShowValue="isShowDialog" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useFriendStore } from '@/stores/friend'
import type { Socket } from 'socket.io-client'
import type { IFriendReq } from '@/request/api/friend/types'

const socket: Socket = inject('socket') as Socket
const router = useRouter()

const store = useUserStore()
const friendStore = useFriendStore()
const { userInfo, getToken } = storeToRefs(store)
const { getFriendBellList } = storeToRefs(friendStore)

const navList = ['羽坛动态', '神兵利器']
let isShowDialog = ref(false)

const navToProduceView = () => {
  router.push({
    path: '/produce',
  })
}

onMounted(() => {
  // 若用户已经登录，则开启socket连接
  if (getToken.value !== '') {
    friendStore.getFriendReceiveList(userInfo.value.id)
    // 获取未处理的好友请求列表
    friendStore.getFriendReceiveUnHandle(userInfo.value.id)

    socket.connect()
    socket.emit('online', userInfo.value)

    // 监听好友请求发送是否成功
    socket.on('send_req_result', (flag: boolean, msg: string) => {
      ElNotification({
        title: msg,
        type: `${flag}` ? 'success' : 'warning',
      })
    })

    // 重新发送好友请求
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
      console.log('zhixingle')

      // 己方已处理，则刷新小铃铛的提醒信息
      friendStore.getFriendReceiveUnHandle(userInfo.value.id)
    })
  }
})
</script>

<style scoped>
.header {
  @apply flex justify-around items-center h-6;
}
</style>
