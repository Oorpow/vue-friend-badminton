<template>
  <SearchedItem :list="strangers">
    <template #header>
      <span text-sm text-gray-4>้็ไบบ</span>
    </template>
  </SearchedItem>
  <SearchedItem :list="list" />
</template>

<script setup lang="ts">
import type { IFriend } from '@/request/api/friend/types'
import type { IUserInfo } from '@/request/api/user/types'

type Props = {
  list: IFriend[]
  strangers: IUserInfo[]
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  strangers: () => [],
})
</script>

<style scoped></style>
