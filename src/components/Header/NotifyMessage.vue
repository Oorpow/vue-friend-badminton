<template>
  <div mx-3 cursor-pointer>
    <el-dropdown trigger="click">
      <ElBadge :is-dot="receiveList.length !== 0">
        <div class="i-ic-baseline-notifications text-2xl"></div>
      </ElBadge>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="navToAccount">
            <div class="i-ic-baseline-person-add-alt-1 text-lg"></div>
            <div class="ml-2">
              {{
                receiveList.length === 0 ? '暂无' : `${receiveList.length}个`
              }}需要处理的好友请求
            </div>
          </el-dropdown-item>
          <el-dropdown-item @click="navToMessage">
            <div class="i-ic-baseline-email text-lg"></div>
            <div class="ml-2">你有{{}}条新的信息</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import type { IFriendReqItem } from '@/request/api/friend/types'
import { useRouter } from 'vue-router'

type Props = {
  receiveList: IFriendReqItem[]
}

const props = defineProps<Props>()

const router = useRouter()

// 导航至message页
const navToAccount = () => {
  router.push({
    name: 'account-request',
  })
}

const navToMessage = () => {
  router.push('/message')
}
</script>

<style scoped></style>
