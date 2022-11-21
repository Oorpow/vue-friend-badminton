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
        <ElAvatar>{{ userInfo.name }}</ElAvatar>
      </template>
      <template v-else>
        <!-- 未登录 -->
        <ElButton @click="isShowDialog = true">登录</ElButton>
        <!-- 发布帖子 -->
        <ElButton ml-0>投稿</ElButton>
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

const store = useUserStore()
const { userInfo } = storeToRefs(store)

const navList = ['羽坛动态', '神兵利器']
let isShowDialog = ref(false)
</script>

<style scoped>
.header {
  @apply flex justify-around items-center h-6;
}
</style>
