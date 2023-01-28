<template>
  <ElInput
    class="search_input"
    :suffix-icon="Search"
    :model-value="modelValue"
    @input="handleSearch"
  />
  <div
    class="result_box w-full absolute z-9 bg-white rounded shadow-2xl rounded-t-none h-51 overflow-y-scroll"
    v-show="showSearchResult"
  >
    <SearchResultItem>
      <template #content>
        <template v-if="userList.length">
          <div
            p-3
            my-3
            flex
            items-center
            cursor-pointer
            hover:bg-gray-2
            v-for="user in userList"
            :key="user.id"
            @click="navToTargetRoute(user.id, NavType.user)"
          >
            <Avatar :username="user.name" :avatar="user.avatar" />
            <span ml-2 text-sm>{{ user.name }}</span>
          </div>
        </template>
        <template v-else>
          <span block mt-2 p-3 text-sm text-gray-5>没有匹配的结果</span>
        </template>
      </template>
    </SearchResultItem>

    <!-- invitation -->
    <SearchResultItem>
      <template #title>
        <h5 m-0 p-3 border-b-1 border-gray-3 text-gray-5>帖子</h5>
      </template>
      <template #content>
        <template v-if="invitationList.length">
          <div
            my-3
            flex
            items-center
            justify-between
            cursor-pointer
            hover:bg-gray-2
            v-for="item in invitationList"
            :key="item.id"
            @click="navToTargetRoute(item.id, NavType.invitation)"
          >
            <span ml-2 text-sm truncate class="w-2/3">{{ item.title }}</span>
            <ElImage
              :src="serverUrl + item.img"
              style="width: 90px; height: 70px"
            />
          </div>
        </template>
        <template v-else>
          <span block mt-2 p-3 text-sm text-gray-5>没有匹配的结果</span>
        </template>
      </template>
    </SearchResultItem>
  </div>
</template>

<script setup lang="ts">
import SearchResultItem from '@/components/Header/components/SearchBox/components/SearchResultItem.vue'

import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import type { InvitationSearch } from '@/request/api/invitation/types'
import type { IUserInfo } from '@/request/api/user/types'
import { useRouter } from 'vue-router'

type Props = {
  modelValue: string
  invitationList: InvitationSearch[]
  userList: IUserInfo[]
}

enum NavType {
  user = 'space',
  invitation = 'news_det',
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  invitationList: () => [],
  userList: () => [],
})

const emits = defineEmits(['update:modelValue'])

const router = useRouter()

const serverUrl = import.meta.env.VITE_LOCAL_SERVER

let showSearchResult = ref(false)

const handleSearch = (e: string) => {
  emits('update:modelValue', e)
  showSearchResult.value = e.trim() !== ''
}

const navToTargetRoute = (id: number, type: string) => {
  router.push({
    path: `/${type}/${id}`,
  })
  showSearchResult.value = false
  emits('update:modelValue', '')
}
</script>

<style scoped>
.matches {
  display: flex;
}
.result_box::-webkit-scrollbar {
  @apply w-1;
}
.result_box::-webkit-scrollbar-thumb {
  @apply border-1 border-gray-2 bg-gray-2 rounded-lg;
}
</style>
