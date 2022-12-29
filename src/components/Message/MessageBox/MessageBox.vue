<template>
  <div flex flex-col h-full>
    <template v-if="friend.friendInfo.name">
      <!-- 聊天对象 -->
      <div text-center p-3 border-b-1 border-gray-2 flex justify-center>
        <span text-sm>{{ friend.friendInfo.name }}</span>
        <div
          style="margin: 1px 0 0 5px"
          @click="$router.push(`/space/${friend.friendInfo.id}`)"
        >
          <ElTooltip content="访问空间">
            <ElIcon cursor-pointer><HomeFilled /></ElIcon>
          </ElTooltip>
        </div>
      </div>
      <!-- 聊天框主体 -->
      <div class="message_wrapper">
        <!-- 聊天内容 -->
        <div class="message_content" ref="messageContentRef">
          <div p-3 relative>
            <!-- 聊天气泡框 -->
            <BubbleBox :msgList="msgList" />
          </div>
        </div>
        <!-- 聊天输入框 -->
        <div class="h-3/10 flex flex-col justify-between px-3">
          <MessageEditor :friend="friend" />
        </div>
      </div>
    </template>
    <template v-else>
      <div w-full h-full relative>
        <div class="absolute left-1/2 top-1/2 translate--1/2">
          <h3>
            Welcome The Chat <span>{{ userInfo.name }}</span>
          </h3>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { HomeFilled } from '@element-plus/icons-vue'
import type { IChatFriend } from '@/request/api/friend/types'
import type { IMsgItem } from '@/request/api/message/types'
import { useUserStore } from '@/stores/user'

type Props = {
  friend: IChatFriend
  msgList: IMsgItem[]
}

const props = defineProps<Props>()

const store = useUserStore()
const messageContentRef = ref<HTMLDivElement>()
const { userInfo } = storeToRefs(store)

// 监听信息的收发，保证信息一直在底部出现
watch(
  () => props.msgList,
  async () => {
    await nextTick(() => {
      messageContentRef.value?.firstElementChild?.lastElementChild?.scrollIntoView()
    })
  },
  {
    immediate: true,
    deep: true,
  }
)
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
