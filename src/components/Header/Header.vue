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
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useUserStore()
const { userInfo } = storeToRefs(store)

const navList = ['羽坛动态', '神兵利器']
let isShowDialog = ref(false)

const navToProduceView = () => {
  router.push({
    path: '/produce',
  })
}
</script>

<style scoped>
.header {
  @apply flex justify-around items-center h-6;
}
</style>
