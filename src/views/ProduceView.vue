<template>
  <Header />
  <div bg-gray-2 p-2 relative overflow-hidden>
    <ElAffix :offset="20" style="width: 50px; height: 0">
      <div bg-white flex flex-col items-center rounded shadow>
        <div
          flex
          flex-col
          items-center
          py-2
          cursor-pointer
          v-for="(_, tab, i) in tabs"
          :key="tab"
          @click="currentTab = tab"
        >
          <ElTooltip
            placement="right"
            :content="i === 0 ? '创作中心' : '内容管理'"
          >
            <ElIcon
              :size="28"
              :color="tab === currentTab ? '#3b82f6' : '#d1d5db'"
            >
              <Edit v-if="i === 0" />
              <Document v-else />
            </ElIcon>
          </ElTooltip>
        </div>
      </div>
    </ElAffix>
    <component
      :is="(tabs as any)[currentTab]"
      :postList="postedInvitationList"
      @switchTab="switchTab"
      @refreshPostList="refreshPostList"
    ></component>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import CustomEditor from '@/components/Produce/CustomEditor/CustomEditor.vue'
import EditProduce from '@/components/Produce/EditProduce/EditProduce.vue'

import { shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import { Edit, Document } from '@element-plus/icons-vue'
import { useInvitationStore } from '@/stores/invitation'
import { useUserStore } from '@/stores/user'

const tabs = {
  CustomEditor,
  EditProduce,
}

const currentTab = shallowRef('CustomEditor')

const invitationStore = useInvitationStore()
const userStore = useUserStore()
const { postedInvitationList } = storeToRefs(invitationStore)
const { userInfo } = storeToRefs(userStore)

invitationStore.getUserPostedInvitation(userInfo.value.id)

const switchTab = (tab: string) => {
  currentTab.value = tab
}

// 刷新发布列表
const refreshPostList = () => {
  invitationStore.getUserPostedInvitation(userInfo.value.id)
}
</script>

<style scoped>
.editor_container {
  @apply w-8/10 bg-white mx-auto rounded-sm p-3;
}
</style>
