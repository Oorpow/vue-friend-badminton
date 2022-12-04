<template>
  <div mx-3 cursor-pointer>
    <el-dropdown trigger="click">
      <ElBadge is-dot>
        <div class="i-ic-baseline-notifications text-2xl"></div>
      </ElBadge>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="navToAccount">
            <div class="i-ic-baseline-person-add-alt-1 text-lg"></div>
            <div class="ml-2">
              {{
                reqList.length === 0 ? '暂无' : `${reqList.length}个`
              }}新的好友请求
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import type { IFriendReq } from '@/request/api/friend/types'
import { useRouter } from 'vue-router'

type Props = {
  reqList: IFriendReq[]
}

defineProps<Props>()
const router = useRouter()

// 导航至message页
const navToAccount = () => {
  router.push({
    name: 'account-request',
  })
}
</script>

<style scoped></style>
