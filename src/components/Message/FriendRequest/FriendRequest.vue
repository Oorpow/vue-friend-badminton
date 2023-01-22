<template>
  <div>
    <div p-3 border-b-1 border-gray-2>
      <span>新的朋友</span>
    </div>
    <div p-3>
      <div
        my-3
        flex
        items-center
        justify-between
        v-for="item in reqList"
        :key="item.id"
      >
        <div flex items-center>
          <Avatar :username="item.name" :avatar="item.avatar" />
          <span ml-2 text-sm>{{ item.name }}</span>
        </div>
        <div>
          <template v-if="item.status === 0">
            <ElButton
              type="success"
              size="small"
              @click="handleApplication(item, true)"
              >接受</ElButton
            >
            <ElButton
              type="danger"
              size="small"
              @click="handleApplication(item, false)"
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
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/Header/components/Avatar.vue'

import { inject } from 'vue'
import { useFriendStore } from '@/stores/friend'
import type { Socket } from 'socket.io-client'
import type { IFriendReqItem } from '@/request/api/friend/types'
import type { IUserInfo } from '@/request/api/user/types'

type Props = {
  reqList: IFriendReqItem[]
  userInfo: IUserInfo
}

const props = withDefaults(defineProps<Props>(), {
  reqList: () => [],
})

const socket = inject('socket') as Socket
const friendStore = useFriendStore()

// 己方处理好友申请
const handleApplication = async (item: IFriendReqItem, isAccept: boolean) => {
  socket.emit('handle_req', props.userInfo, item, isAccept)
}

// 己方接收到处理完毕的信号
socket.on('req_handle_done_self', () => {
  // 重新获取一下收发的申请列表
  friendStore.getFriendReceiveList(props.userInfo.id)
  //   friendStore.getFriendReqList(props.userInfo.id)
})
</script>

<style scoped></style>
