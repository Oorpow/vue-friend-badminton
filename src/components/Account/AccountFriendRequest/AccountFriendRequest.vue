<template>
  <div p-3>
    <AccountFriendReqItem :list="friendReqList">
      <template #header>
        <h3>已发送的好友申请</h3>
      </template>
    </AccountFriendReqItem>
    <AccountFriendReceive :list="friendReceiveList">
      <template #header>
        <h3>已接收的好友申请</h3>
      </template>
    </AccountFriendReceive>
  </div>
</template>

<script setup lang="ts">
import { useFriendStore } from '@/stores/friend'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const store = useFriendStore()
const userStore = useUserStore()
const { friendReqList, friendReceiveList } = storeToRefs(store)
const { userInfo } = storeToRefs(userStore)

if (userInfo.value) {
  store.getFriendReqList(userInfo.value.id)
  store.getFriendReceiveList(userInfo.value.id)
  console.log(friendReceiveList.value)
}
</script>

<style scoped></style>
