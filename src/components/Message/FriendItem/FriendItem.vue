<template>
  <div
    :class="[
      'friend_item',
      friend.id === currentChatFriendId ? 'bg-gray-1' : '',
    ]"
    v-for="friend in friendList"
    :key="friend.id"
    @click="chooseChatFriend(friend)"
  >
    <div>
      <ElAvatar size="large">{{ friend.friendInfo.name.slice(0, 1) }}</ElAvatar>
    </div>
    <div ml-2 flex flex-col overflow-hidden>
      <h4 m-0>
        {{ friend.friendInfo.name }}
        {{ judgeUserStatus(friend.friendInfo.status) }}
      </h4>
      <template v-for="msg in lastMsgList" :key="msg.friendId">
        <span text-sm truncate v-if="friend.friendInfo.id === msg.friendId">{{
          msg.content
        }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { judgeUserStatus } from '@/utils/judgeUserStatus'
import type { IFriend } from '@/request/api/friend/types'
import type { ILastMsg } from '@/request/api/message/types'

type Props = {
  friendList: IFriend[]
  lastMsgList: ILastMsg[]
}

const props = defineProps<Props>()
const emits = defineEmits(['chooseFriend'])

const currentChatFriendId = ref(1)

const chooseChatFriend = (friend: IFriend) => {
  currentChatFriendId.value = friend.id
  emits('chooseFriend', friend.friendInfo)
}
</script>

<style scoped>
.friend_item {
  @apply flex items-center p-3 cursor-pointer hover:bg-gray-1;
}
</style>
