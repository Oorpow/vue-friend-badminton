<template>
  <slot name="header"></slot>
  <template v-if="list.length !== 0">
    <div v-for="item in list" :key="item.id" my-3>
      <div flex justify-between>
        <div>
          <ElAvatar>{{ item.name.slice(0, 2) }}</ElAvatar>
          <span ml-3>{{ item.name }}</span>
        </div>
        <div>
          <template v-if="item.status === 0">
            <ElButton type="primary">接受</ElButton>
            <ElButton type="danger">拒绝</ElButton>
          </template>
          <template v-else-if="item.status === 1">
            <ElTag type="success">已接受</ElTag>
          </template>
          <template v-else>
            <ElTag type="warning">已拒绝</ElTag>
          </template>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div>无</div>
  </template>
</template>

<script setup lang="ts">
import type { IFriendReqItem } from '@/request/api/friend/types'

type Props = {
  list: IFriendReqItem[]
}
defineProps<Props>()
</script>

<style scoped></style>
