<template>
  <!-- 左边对方 | 右边己方 -->
  <div
    :class="
      isUserSend(item.from_uid, 'message_item_left', 'message_item_right')
    "
    v-for="item in msgList"
    :key="item.id"
  >
    <ElAvatar shape="square">{{
      isUserSend(item.from_uid)
        ? userInfo.name.slice(0, 1)
        : item.friendInfo.name.slice(0, 1)
    }}</ElAvatar>
    <div flex flex-col ml-3>
      <span
        mt--1
        text-sm
        mr-5
        :class="isUserSend(item.from_uid, 'text-left', 'text-right')"
        >{{ isUserSend(item.from_uid) ? '' : item.friendInfo.name }}</span
      >
      <div
        flex
        items-center
        :class="isUserSend(item.from_uid, '', 'flex-row-reverse')"
      >
        <div :class="isUserSend(item.from_uid, 'bubble_left', 'bubble_right')">
          <span v-if="item.type === 0">{{ item.content }}</span>
          <ElImage
            v-else
            class="w-15 h-10 overflow-hidden"
            :src="serverUrl + item.content"
            :preview-src-list="imgPreviewList"
            :initial-index="initPreviewIndex"
            fit="cover"
            @click="switchImg(item.id)"
          />
        </div>
        <div
          v-show="isUserSend(item.from_uid) && item.is_read === 1"
          class="i-ic-twotone-check-circle-outline mr-2 bg-gray-3"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useMessageStore } from '@/stores/message'
import type { IMsgItem } from '@/request/api/message/types'

type Props = {
  msgList: IMsgItem[]
}

const props = defineProps<Props>()

const store = useUserStore()
const messageStore = useMessageStore()
const { userInfo } = storeToRefs(store)
const { imgPreviewList } = storeToRefs(messageStore)
const serverUrl = import.meta.env.VITE_LOCAL_SERVER

let initPreviewIndex = ref(0)

// 切换预览图片的索引
const switchImg = (id: number) => {
  const result = props.msgList.filter((item) => item.id === id)[0]
  messageStore.getAllImgOfMsg(result.content)
}

// 判断该信息是否是己方发送的
const isUserSend = (id: number, leftStyle?: string, rightStyle?: string) => {
  if (leftStyle || rightStyle) {
    return id === userInfo.value.id ? rightStyle : leftStyle
  } else {
    return id === userInfo.value.id
  }
}
</script>

<style scoped>
.message_item_left {
  @apply flex my-5 first:mt-0;
}
.message_item_right {
  @apply flex flex-row-reverse my-5 first:mt-0;
}

.bubble_left,
.bubble_right {
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  padding: 7px;
  margin-top: 5px;
  @apply flex items-center relative bg-minor;
}

.bubble_left {
  @apply ml-1;
}

.bubble_right {
  @apply mr-4;
}

.bubble_left::before,
.bubble_right::before {
  @apply w-0 h-0 content-empty absolute;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  top: 6px;
}

.bubble_left::before {
  border-right: 10px solid #f3f3f3;
  left: -10px;
}
.bubble_right::before {
  border-left: 10px solid #f3f3f3;
  right: -10px;
}
</style>
