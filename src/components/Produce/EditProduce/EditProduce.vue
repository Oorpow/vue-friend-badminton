<template>
  <div class="w-2/3 mx-auto my-14 bg-white dark:bg-zinc-900 rounded p-3">
    <div v-show="!isShowEditor">
      <template v-if="postList.length">
        <div>
          <span>已发布({{ postList.length }})</span>
          <div>
            <div
              class="flex justify-between items-center my-5 p-3 bg-gray-1 dark:bg-zinc-800"
              v-for="item in postList"
              :key="item.invitation_id"
            >
              <div flex items-center>
                <ElImage
                  :src="serverUrl + item.img"
                  style="width: 70px; height: 70px"
                  fit="cover"
                />
                <span ml-2>{{ item.title }}</span>
              </div>
              <ElButton
                round
                color="#3b82f6"
                size="large"
                @click="editOneProduce(item)"
                >去编辑</ElButton
              >
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="w-2/3 mx-auto h-80 my-4 bg-white rounded p-3 relative">
          <div
            class="absolute left-1/2 top-1/2 translate-x--1/2 translate-y--1/2"
          >
            <ElEmpty description="还没有内容~快去创作吧~">
              <ElButton
                round
                color="#3b82f6"
                size="large"
                @click="$emit('switchTab', 'CustomEditor')"
                >立即创作</ElButton
              >
            </ElEmpty>
          </div>
        </div>
      </template>
    </div>
    <div v-if="isShowEditor">
      <CustomEditor
        :editorForm="editorForm"
        type="edit"
        @showEditor="showEditor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomEditor from '../CustomEditor/CustomEditor.vue'

import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import type { InvitationInfo, Invitation } from '@/request/api/invitation/types'

type Props = {
  postList: InvitationInfo[]
}
const props = defineProps<Props>()
const emits = defineEmits(['switchTab', 'refreshPostList'])

const serverUrl = import.meta.env.VITE_LOCAL_SERVER

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

let isShowEditor = ref(false)
const showEditor = (flag: boolean, refresh: boolean = true) => {
  if (refresh) {
    emits('refreshPostList')
  }
  isShowEditor.value = flag
}

let editorForm = ref<Invitation>({
  title: '',
  content: '',
  img: '',
  uid: 0,
  tag: [],
})

const editOneProduce = (item: InvitationInfo) => {
  let newTagList = []

  for (const iterator of item.tagList.values()) {
    newTagList.push(iterator.name)
  }

  editorForm.value = {
    title: item.title,
    content: item.content,
    img: item.img,
    tag: newTagList,
    uid: userInfo.value.id,
    invId: item.invitation_id,
  }
  isShowEditor.value = true
}
</script>

<style scoped></style>
