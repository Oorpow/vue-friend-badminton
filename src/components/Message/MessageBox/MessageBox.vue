<template>
  <div flex flex-col h-full>
    <!-- 聊天对象 -->
    <div text-center p-3 border-b-1 border-gray-2>
      <span text-sm>{{ friend.friendInfo.name }}</span>
    </div>
    <!-- 聊天框主体 -->
    <div class="message_wrapper" bg-gray-1>
      <!-- 聊天内容 -->
      <div class="message_content">
        <div p-3>
          <!-- 聊天气泡框 -->
          <BubbleBox :msgList="msgList" />
        </div>
      </div>
      <!-- 聊天输入框 -->
      <div class="h-3/10 flex flex-col justify-around px-3">
        <MessageEditor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFriend } from '@/request/api/friend/types'
import type { IMsgItem } from '@/request/api/message/types'

type Props = {
  friend: IFriend
  msgList: IMsgItem[]
}

defineProps<Props>()
</script>

<style scoped>
.message_wrapper {
  height: calc(100% - 45px);
}
.message_content {
  @apply h-7/10 overflow-auto border-b-1 border-gray-2;
}
.message_content::-webkit-scrollbar {
  @apply w-1;
}

.message_content::-webkit-scrollbar-button {
  @apply h-1;
}

.message_content::-webkit-scrollbar-thumb {
  @apply h-3 border-1 border-gray-2 bg-gray-2 rounded-lg;
}
</style>
