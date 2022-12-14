<template>
  <Header />
  <div>
    <div w-full h-16 bg-color-primary></div>
    <div w-full bg-white>
      <div class="w-8/10 mx-auto">
        <!-- 头像和用户信息 -->
        <div flex items-center>
          <ElAvatar
            :size="80"
            style="margin-top: -15px; border: 4px solid #fff"
            >{{
              spaceUserInfo.name && spaceUserInfo.name.slice(0, 1)
            }}</ElAvatar
          >
          <h3>{{ spaceUserInfo.name && spaceUserInfo.name }}</h3>
          <template v-if="!isFriend && !isMyself">
            <ElButton color="#3b82f6" round ml-2>关注</ElButton></template
          >
          <template v-else-if="isMyself">
            <span>我自己</span>
          </template>
          <template v-else>
            <ElButton color="#3b82f6" round ml-2>发消息</ElButton>
          </template>
        </div>
        <div my-2 p-2>
          <span
            text-gray
            cursor-pointer
            last:ml-5
            v-for="tab in tabList"
            :key="tab.id"
            @click=";(currentTab as any) = tab.comName"
            :class="currentTab === tab.comName ? 'tab_active' : ''"
            >{{ tab.name }}</span
          >
        </div>
      </div>
    </div>
    <div class="w-8/10 mx-auto">
      <component :is="currentTab" :friends="friendList"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpaceInvitation from '@/components/Space/SpaceInvitation/SpaceInvitation.vue'
import SpaceFriend from '@/components/Space/SpaceFriend/SpaceFriend.vue'
import { markRaw, shallowRef, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useFriendStore } from '@/stores/friend'

const route = useRoute()
const userStore = useUserStore()
const friendStore = useFriendStore()

const { spaceUserInfo, userInfo } = storeToRefs(userStore)
const { friendList } = storeToRefs(friendStore)

const tabList = [
  { id: 1, name: '投稿', comName: markRaw(SpaceInvitation) },
  { id: 2, name: '关注列表', comName: markRaw(SpaceFriend) },
]

const currentTab = shallowRef(SpaceInvitation)
const isFriend = ref(false)
const isMyself = ref(false)

watch(
  () => route.params,
  async (newVal) => {
    // 获取空间的主人信息
    await userStore.getUserInfoById(Number(newVal.id))
    isMyself.value = spaceUserInfo.value.id === userInfo.value.id
    await friendStore.getFriendListById(Number(newVal.id))
    isFriend.value = friendList.value.some(
      (item) => item.friendInfo.id === spaceUserInfo.value.id
    )
  },
  {
    deep: true,
    immediate: true,
  }
)
</script>

<style scoped>
.tab_active {
  @apply p-b-1 border-b-3 border-blue text-black;
}
</style>
