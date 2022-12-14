<template>
  <div class="bg-white p-3 rounded mt-10">
    <div>
      <div border-b-1 border-gray-2 p-b-3>
        <span>全部关注</span>
      </div>
      <div mt-5>
        <template v-if="friends.length">
          <div
            flex
            justify-between
            border-b-1
            border-gray-2
            p-b-4
            mt-5
            v-for="item in friends"
            :key="item.id"
          >
            <!-- 头像和信息 -->
            <div
              flex
              items-center
              cursor-pointer
              @click="navToSpace(item.friendInfo.id)"
            >
              <ElAvatar>{{ item.friendInfo.name.slice(0, 1) }}</ElAvatar>
              <div flex flex-col ml-3>
                <span>{{ item.friendInfo.name }}</span>
                <span text-sm text-gray>这个人没有填简介啊~~~</span>
              </div>
            </div>
            <!-- 操作按钮 -->
            <div>
              <ElButton color="#f5f5f5">已关注</ElButton>
            </div>
          </div>
        </template>
        <template v-else>
          <ElEmpty description="该用户还未曾关注过其他用户" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { IFriend } from '@/request/api/friend/types'

type Props = {
  friends: IFriend[]
}
const props = defineProps<Props>()

const router = useRouter()

const navToSpace = (id: number) => {
  router.push(`/space/${id}`)
}
</script>

<style scoped></style>
