<template>
  <div
    :class="[
      'friend_item',
      friend.id === currentChatFriendId ? 'bg-gray-1 dark:bg-zinc-8' : '',
    ]"
    v-for="friend in friendList"
    :key="friend.id"
    @click="chooseChatFriend(friend)"
  >
    <!-- 未读信息 -->
    <template v-for="(v, k) in unreadMap" :key="k">
      <div
        class="w-2 h-2 rounded-full absolute top-2 right-4 text-center bg-red-400"
        v-if="v[0] === friend.friendInfo.name && v[1].length !== 0"
      >
        <span class="text-white dark:text-zinc-800">{{ v[1].length }}</span>
      </div>
    </template>

    <div flex>
      <!-- 头像以及当前用户是否在线 -->
      <div>
        <ElBadge
          type="success"
          :is-dot="friend.friendInfo.status !== 0"
          class="relative left-0"
        >
          <Avatar
            :username="friend.friendInfo.name"
            :avatar="friend.friendInfo.avatar"
            :size="40"
            shape="square"
          />
        </ElBadge>
      </div>

      <div ml-2 flex flex-col overflow-hidden>
        <!-- 用户名 -->
        <div>
          <h4 m-0>
            {{ friend.friendInfo.name }}
          </h4>
        </div>

        <!-- 最后一条信息 -->
        <div>
          <template v-for="msg in lastMsgList" :key="msg.friendId">
            <span
              block
              w-10
              truncate
              text-gray
              v-if="friend.friendInfo.id === msg.friendId"
              >{{ msg.type === 0 ? msg.content : '[图片]' }}</span
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/Header/components/Avatar.vue'

import { ref } from 'vue'
import type { IFriend } from '@/request/api/friend/types'
import type { ILastMsg } from '@/request/api/message/types'

type Props = {
  friendList: IFriend[]
  lastMsgList: ILastMsg[]
  unreadMap: any
}

const props = defineProps<Props>()
const emits = defineEmits(['chooseFriend'])

const currentChatFriendId = ref(0)

const chooseChatFriend = (friend: IFriend) => {
  currentChatFriendId.value = friend.id
  emits('chooseFriend', friend.friendInfo)
}
</script>

<style scoped>
.friend_item {
  @apply flex items-center relative p-3 cursor-pointer hover:bg-gray-1 hover:dark:bg-zinc-800 mt-3 first:mt-0;
}
</style>
