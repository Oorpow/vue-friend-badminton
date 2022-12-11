<template>
  <div class="w-6.5/10 my-10">
    <ElTabs v-model="activeTab" @tab-click="changeTab">
      <ElTabPane
        v-for="tab in tagList"
        :key="tab.id"
        :label="tab.name"
        :name="tab.id"
      >
        <div>
          <KeepAlive>
            <NewsItem :list="invitationListByTag" />
          </KeepAlive>
        </div>
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useInvitationStore } from '@/stores/invitation'
import type { ITag } from '@/request/api/tag/types'
import type { TabsPaneContext } from 'element-plus'

type Props = {
  tagList: ITag[]
}
defineProps<Props>()

const activeTab = ref(1)

const invitationStore = useInvitationStore()
invitationStore.getInvitationByTagId(activeTab.value)
const { invitationListByTag } = storeToRefs(invitationStore)

const changeTab = (tab: TabsPaneContext) => {
  invitationStore.getInvitationByTagId(tab.paneName as number)
}
</script>

<style scoped>
.tab_item {
  /* @apply flex w-1/4 h-8 items-center justify-center border-gray-3 cursor-pointer hover:border-b-3 hover:border-blue-5 transition; */
}
.tab_item .tab_item_span {
  /* @apply block w-5/10 text-center; */
}
.tab_item_span_active {
  /* @apply border-blue-5 border-b-3; */
}
</style>
