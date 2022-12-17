<template>
  <div p-2>
    <slot name="header">
      <span text-sm text-gray-4>联系人</span>
    </slot>
  </div>
  <div>
    <div
      flex
      items-center
      justify-between
      p-2
      my-3
      first:mt-0
      bg-white
      hover:bg-gray-2
      cursor-pointer
      v-for="item in list"
      :key="item.id"
    >
      <div>
        <ElAvatar shape="square">{{
          (item.friendInfo && item.friendInfo.name) || (item.name && item.name)
        }}</ElAvatar>
        <span ml-2 text-sm>{{
          (item.friendInfo && item.friendInfo.name) || (item.name && item.name)
        }}</span>
      </div>

      <div
        class="i-ic-baseline-person-add text-xl cursor-pointer text-gray"
        v-show="!item.friendInfo"
        @click="makeFriend(item)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import type { Socket } from 'socket.io-client'
import { useFriendStore } from '@/stores/friend'
import { useUserStore } from '@/stores/user'

type Props = {
  list: any[]
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
})

const socket = inject('socket') as Socket
const friendStore = useFriendStore()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const makeFriend = (user: any) => {
  if (user.status === 0) {
    // 离线状态下直接调接口
    friendStore.sendReqToFriend(userInfo.value.id, user.id)
  } else {
    // 在线状态下，实时通信
    socket.emit('send_req', user.name, userInfo.value.name, userInfo.value.id)
  }
}
</script>

<style scoped></style>
