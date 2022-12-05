<template>
  <slot name="header"></slot>
  <template v-if="list.length !== 0">
    <div v-for="item in list" :key="item.id" my-3>
      <div flex justify-between>
        <div>
          <ElAvatar>{{ item.name.slice(0, 2) }}</ElAvatar>
          <span ml-3>{{ item.name }}</span>
        </div>
        <div>
          <template v-if="item.status === 0">
            <ElButton type="primary" @click="handleApplication(item, true)"
              >接受</ElButton
            >
            <ElButton type="danger" @click="handleApplication(item, false)"
              >拒绝</ElButton
            >
          </template>
          <template v-else-if="item.status === 1">
            <ElTag type="success">已接受</ElTag>
          </template>
          <template v-else>
            <ElTag type="warning">已拒绝</ElTag>
          </template>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div>无</div>
  </template>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useFriendStore } from '@/stores/friend'
import { useUserStore } from '@/stores/user'
import type { IFriendReqItem } from '@/request/api/friend/types'
import type { Socket } from 'socket.io-client'

type Props = {
  list: IFriendReqItem[]
}
defineProps<Props>()

const socket = inject('socket') as Socket

const friendStore = useFriendStore()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

// 己方处理好友申请
const handleApplication = async (item: IFriendReqItem, isAccept: boolean) => {
  socket.emit('handle_req', userInfo.value, item, isAccept)
}

onMounted(() => {
  // 己方接收到处理完毕的信号
  socket.on('req_handle_done_self', () => {
    // 重新获取一下收发的申请列表
    friendStore.getFriendReceiveList(userInfo.value.id)
    friendStore.getFriendReqList(userInfo.value.id)
  })
})
</script>

<style scoped></style>
