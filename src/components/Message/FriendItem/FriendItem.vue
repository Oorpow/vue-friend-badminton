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
    <div flex>
      <div>
        <!-- 头像 -->
        <ElAvatar size="large" shape="square">{{
          friend.friendInfo.name.slice(0, 1)
        }}</ElAvatar>
      </div>

      <div ml-2 flex flex-col overflow-hidden>
        <div>
          <!-- 用户名和用户状态 -->
          <h4 m-0>
            {{ friend.friendInfo.name }}
          </h4>
          <span text-sm>{{ judgeUserStatus(friend.friendInfo.status) }}</span>
          <!-- 未读信息数 -->
          <template v-for="(v, k) in unreadMap" :key="k">
            <ElBadge
              :value="v[1].length"
              ml-3
              v-show="v[0] === friend.friendInfo.name && v[1].length !== 0"
            ></ElBadge>
          </template>
        </div>

        <!-- 最后一条信息 -->
        <template v-for="msg in lastMsgList" :key="msg.friendId">
          <span text-sm truncate v-if="friend.friendInfo.id === msg.friendId">{{
            msg.type === 0 ? msg.content : '[图片]'
          }}</span>
        </template>
      </div>
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
  @apply flex items-center p-3 cursor-pointer hover:bg-gray-1 bg-white mt-3 first:mt-0;
}
</style>
