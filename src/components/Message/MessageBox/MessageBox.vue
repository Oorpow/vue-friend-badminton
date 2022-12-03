<template>
  <div flex flex-col h-full>
    <!-- 聊天对象 -->
    <div text-center p-3 border-b-1 border-gray-2>
      <span text-sm>TAKERA</span>
    </div>
    <!-- 聊天框主体 -->
    <div h-full bg-gray-1>
      <!-- 聊天内容 -->
      <div class="message_content"></div>
      <!-- 聊天输入框 -->
      <div class="h-3/10 flex flex-col justify-around px-3">
        <MessageEditor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'
import type { Socket } from 'socket.io-client'

const socket = inject('socket') as Socket
</script>

<style scoped>
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
