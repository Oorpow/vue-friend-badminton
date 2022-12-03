<template>
  <div class="header">
    <div class="w-1/4">LOGO</div>
    <div class="flex-1s">
      <template v-for="(item, i) in navList" :key="i">
        <span mx-1 cursor-pointer>{{ item }}</span>
      </template>
    </div>
    <div class="w-1/10 flex items-center">
      <template v-if="store.getToken !== ''">
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
import { useUserStore } from '@/stores/user'
import type { Socket } from 'socket.io-client'

const socket: Socket = inject('socket') as Socket

const router = useRouter()

const store = useUserStore()
const { userInfo, getToken } = storeToRefs(store)

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
    socket.connect()
    socket.emit('online', userInfo.value)
  }
})
</script>

<style scoped>
.header {
  @apply flex justify-around items-center h-6;
}
</style>
