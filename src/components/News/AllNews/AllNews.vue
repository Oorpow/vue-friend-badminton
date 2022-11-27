<template>
  <div class="w-8/10 mx-auto my-10">
    <div flex flex-wrap justify-between>
      <template v-for="item in invitationList" :key="item.id">
        <NewsItem :news="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useInvitationStore } from '@/stores/invitation'

const store = useInvitationStore()
store.getInvitationList()
const { invitationList } = storeToRefs(store)
</script>

<style scoped></style>
