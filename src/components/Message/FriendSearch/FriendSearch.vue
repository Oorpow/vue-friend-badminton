<template>
  <div>
    <ElButton @click="showSearchDialog">添加用户</ElButton>
    <ElDialog v-model="dialogSearchVisible" title="搜索好友">
      <ElInput
        v-model="friendName"
        placeholder="请输入好友名称"
        @input="searchUser"
      />
      <div>
        <template v-if="userList.length === 0">
          <span>没有相关用户记录</span>
        </template>
        <template v-else>
          <div
            flex
            justify-between
            my-2
            v-for="item in userList"
            :key="item.id"
          >
            <span>{{ item.id }} - {{ item.name }}</span>
            <template v-if="item.id === userInfo.id">
              <span>自己</span>
            </template>
            <template v-else>
              <span>{{ judgeUserStatus(item.status) }}</span>
              <div
                class="i-ic-outline-file-download-done bg-green-4 text-lg"
                v-if="isFriend(item.id)"
              ></div>
              <div
                class="i-ic-baseline-person-add text-lg cursor-pointer"
                v-else
                @click="makeFriend(item)"
              ></div>
            </template>
          </div>
        </template>
      </div>
    </ElDialog>
  </div>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useFriendStore } from '@/stores/friend'
import { judgeUserStatus } from '@/utils/judgeUserStatus'
import type { Socket } from 'socket.io-client'
import type { IUserInfo } from '@/request/api/user/types'

const socket: Socket = inject('socket') as Socket
const userStore = useUserStore()
const friendStore = useFriendStore()
const { userList, userInfo } = storeToRefs(userStore)
const { friendList } = storeToRefs(friendStore)

const dialogSearchVisible = ref(false)
const friendName = ref('')

// 显示模态框
const showSearchDialog = () => {
  dialogSearchVisible.value = true
}

// 根据用户名搜索用户
const searchUser = () => {
  userStore.getUserByName(friendName.value)
}

// 获取当前用户的好友列表
if (userInfo.value.id) {
  friendStore.getFriendListById(userInfo.value.id)
}

// 判断当前用户是否已成为好友
const isFriend = (id: number) => {
  const result = friendList.value.some((item) => item.friendInfo.id === id)
  return result
}

// 发送好友申请
const makeFriend = (user: IUserInfo) => {
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
