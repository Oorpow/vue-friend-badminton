<template>
  <div p-3 border-1 border-gray-2 bg-white rounded-lg mt-5 first:mt-0>
    <slot name="title"></slot>
    <div flex items-center my-3 v-for="item in list" :key="item.id">
      <ElAvatar
        cursor-pointer
        v-if="item.avatar"
        :src="isTag ? `${item.avatar}` : serverUrl + item.avatar"
        @click="navToDetail(item.id, isTag)"
      />
      <img v-else :src="serverUrl + item.img" class="w-6 h-3 bg-cover" />
      <span text-sm ml-2>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElAvatar } from 'element-plus'
import { useRouter } from 'vue-router'

type Props = {
  list: any[]
  isTag: boolean
}

const props = defineProps<Props>()
const router = useRouter()

const serverUrl = import.meta.env.VITE_LOCAL_SERVER

const navToDetail = (id: number, isTag: boolean) => {
  if (isTag) {
    router.push(`/news/${id}`)
  } else {
    router.push(`/player/${id}/career`)
  }
}
</script>

<style scoped></style>
