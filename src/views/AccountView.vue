<template>
  <Header />
  <div class="w-8/10 mx-auto">
    <!-- banner图 -->

    <!-- 账户框 -->
    <div flex border border-gray-2 rounded shadow>
      <!-- 左侧菜单栏 -->
      <div w-15 border-r-1 border-gray-2>
        <div text-center my-3>
          <span>个人中心</span>
        </div>
        <div
          v-for="(item, index) in sidebarRoutes"
          :key="item.title"
          class="flex items-center justify-center p-3 cursor-pointer"
          :class="currentIndex === index ? 'bg-blue-3' : ''"
          @click="changeRoute(index, item.path)"
        >
          <div :class="item.icon" class="mr-2 text-xl bg-gray-5"></div>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <!-- 右侧对应路由页面 -->
      <div flex-1>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const sidebarRoutes = [
  {
    path: '/account/home',
    title: '我的信息',
    icon: 'i-ic-outline-manage-accounts',
  },
  {
    path: '/account/request',
    title: '好友请求',
    icon: 'i-ic-baseline-person-add-alt',
  },
]

const currentIndex = ref(0)

const changeRoute = (index: number, path: string) => {
  currentIndex.value = index
  router.push(path)
}
</script>

<style scoped></style>
