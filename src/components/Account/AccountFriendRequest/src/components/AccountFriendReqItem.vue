<template>
  <!-- <h3 my-0>已发送的邀请</h3> -->
  <div>
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
              <ElTag type="info">等待对方接受</ElTag>
            </template>
            <template v-else-if="item.status === 1">
              <ElTag type="success">已成为好友</ElTag>
            </template>
            <template v-else>
              <ElTag type="danger">对方拒绝了你的申请</ElTag>
            </template>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div>无</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IFriendReqItem } from '@/request/api/friend/types'

type Props = {
  list: IFriendReqItem[]
}
defineProps<Props>()
</script>

<style scoped></style>
