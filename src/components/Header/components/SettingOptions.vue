<template>
  <div mx-4>
    <ElDropdown>
      <Avatar :username="username" :avatar="avatar" />
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem
            v-for="item in dropdownList"
            :key="item.id"
            :icon="item.iconName"
            @click="navToTargetRoute(item.path)"
          >
            {{ item.title }}
          </ElDropdownItem>
          <ElDropdownItem :icon="Switch" divided @click="userLogout"
            >切换账号</ElDropdownItem
          >
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
import Avatar from './Avatar.vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import {
  ArrowDown,
  EditPen,
  User,
  Switch,
  ChatRound,
} from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import type { Socket } from 'socket.io-client'

type Props = {
  username: string
  avatar: string
}

defineProps<Props>()

const socket = inject('socket') as Socket
const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

// 下拉菜单
const dropdownList = [
  {
    id: 1,
    iconName: EditPen,
    path: '/produce',
    title: '投稿',
  },
  {
    id: 2,
    iconName: ChatRound,
    path: '/message',
    title: '聊天室',
  },
  {
    id: 3,
    iconName: User,
    path: `/space/${userInfo.value.id}`,
    title: '个人中心',
  },
]

const navToTargetRoute = (path: string) => {
  router.push(path)
}

// 用户退出登录
const userLogout = async () => {
  let name = userInfo.value.name
  // 通知好友，该用户已离线
  await userStore.logout(userInfo.value.id)
  socket.emit('offline', name)
  router.replace('/')
}
</script>

<style scoped></style>
