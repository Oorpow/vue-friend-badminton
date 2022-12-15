<template>
  <Header />
  <div>
    <!-- 空间背景 -->
    <div
      w-full
      h-16
      relative
      :style="{
        background: currentSpaceBg,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div absolute right-5 bottom-1>
        <UploadCpn
          :uploadConfig="uploadConfig"
          :type="uploadType.bg"
          @updateBgOrAvatar="updateBgOrAvatar"
        />
      </div>
    </div>

    <div w-full bg-white>
      <div class="w-8/10 mx-auto">
        <!-- 头像和用户信息 -->
        <div flex items-center relative>
          <ElAvatar
            :size="80"
            style="margin-top: -15px; border: 4px solid #fff"
            v-if="!spaceUserInfo.avatar"
            >{{
              spaceUserInfo.name && spaceUserInfo.name.slice(0, 1)
            }}</ElAvatar
          >
          <ElAvatar
            :size="80"
            style="margin-top: -15px; border: 4px solid #fff"
            :src="serverUrl + spaceUserInfo.avatar"
            v-else
          />

          <div flex flex-col ml-3>
            <h3 m-0>{{ spaceUserInfo.name && spaceUserInfo.name }}</h3>
            <span text-sm mt-2>个性签名...</span>
          </div>
          <template v-if="!isFriend && !isMyself">
            <ElButton color="#3b82f6" round ml-2>关注</ElButton></template
          >
          <template v-else-if="isMyself"> </template>
          <template v-else>
            <ElButton color="#3b82f6" round ml-2>发消息</ElButton>
          </template>
        </div>
        <!-- 头像上传 -->
        <div flex mt--8 ml-12>
          <UploadCpn
            :uploadConfig="uploadConfig"
            :type="uploadType.avatar"
            @updateBgOrAvatar="updateBgOrAvatar"
          />
        </div>
        <!-- 选项卡 -->
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
import { markRaw, shallowRef, watch, ref, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Camera } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import { useFriendStore } from '@/stores/friend'
import type { IFriend } from '@/request/api/friend/types'
import { uploadConfig, uploadType } from '@/components/Space/UploadCpn/config'

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
const currentUserFriends = reactive<IFriend[]>([])

// 保存一份当前用户的好友列表
friendStore.getFriendListById(userInfo.value.id).then(() => {
  currentUserFriends.length = 0
  currentUserFriends.push(...friendList.value)
})

watch(
  () => route.params,
  async (newVal) => {
    // 获取空间的主人信息
    await userStore.getUserInfoById(Number(newVal.id))
    isMyself.value = spaceUserInfo.value.id === userInfo.value.id
    computeSpaceBg.value = spaceUserInfo.value.space_bg
    await friendStore.getFriendListById(Number(newVal.id))
    isFriend.value = currentUserFriends.some(
      (item) => item.friendInfo.id === spaceUserInfo.value.id
    )
  },
  {
    deep: true,
    immediate: true,
  }
)

const serverUrl = import.meta.env.VITE_LOCAL_SERVER
// 空间背景的控制
const currentSpaceBg = ref('#3b82f6')
const computeSpaceBg = computed({
  get: () => '#3b82f6',
  set: (val) => {
    if (val) {
      currentSpaceBg.value = `url(${serverUrl}${val})`
    }
  },
})

const updateBgOrAvatar = async (type: string, url: string) => {
  if (type === uploadType.bg) {
    await userStore.updateUserSpaceBg(userInfo.value.id, url)
  } else {
    // 头像更新
    await userStore.updateUserAvatar(userInfo.value.id, url)
  }
  await userStore.getUserInfoById(spaceUserInfo.value.id)
  computeSpaceBg.value = spaceUserInfo.value.space_bg
}
</script>

<style scoped>
.tab_active {
  @apply p-b-1 border-b-3 border-blue text-black;
}
</style>
