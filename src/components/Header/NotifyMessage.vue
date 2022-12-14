<template>
  <div cursor-pointer ml-3>
    <ElDropdown>
      <ElBadge :is-dot="receiveList.length !== 0 || unreadNums !== 0">
        <ElIcon :size="24"> <Bell /> </ElIcon>
      </ElBadge>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem @click="navToAccount" :icon="CirclePlus">
            {{
              receiveList.length === 0 ? '暂无' : `${receiveList.length}个`
            }}好友请求
          </ElDropdownItem>
          <ElDropdownItem @click="navToMessage" :icon="Message">
            {{
              unreadNums === 0 ? '暂无未读信息' : `你有${unreadNums}条新的信息`
            }}
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Message, CirclePlus, Bell } from '@element-plus/icons-vue'
import type { IFriendReqItem } from '@/request/api/friend/types'

type Props = {
  receiveList: IFriendReqItem[]
  unreadNums: number
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
