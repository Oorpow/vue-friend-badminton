<template>
  <div mx-4>
    <ElDropdown>
      <ElButton>
        {{ userInfo.name }}<ElIcon class="el-icon--right"><ArrowDown /></ElIcon>
      </ElButton>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem :icon="EditPen" @click="navToTargetRoute('/produce')"
            >投稿</ElDropdownItem
          >
          <ElDropdownItem
            :icon="User"
            @click="navToTargetRoute(`/space/${userInfo.id}`)"
            >个人中心</ElDropdownItem
          >
          <ElDropdownItem :icon="Switch" divided @click="userLogout"
            >切换账号</ElDropdownItem
          >
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ArrowDown, EditPen, User, Switch } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import type { Socket } from 'socket.io-client'

const socket = inject('socket') as Socket
const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const navToTargetRoute = (path: string) => {
  router.push(path)
}

// 用户退出登录
const userLogout = async () => {
  // 通知好友，该用户已离线
  await userStore.logout(userInfo.value.id)
  socket.emit('offline', userInfo.value.name)
  router.replace('/')
}
</script>

<style scoped></style>
