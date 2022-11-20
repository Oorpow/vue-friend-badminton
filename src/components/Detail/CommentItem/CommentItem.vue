<template>
  <div flex w-full mt-5 v-for="item in commentList" :key="item.id">
    <div>
      <ElAvatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        size="default"
        w-6
      />
    </div>
    <div w-full flex flex-col ml-2>
      <span text-gray-6 text-sm>{{ item.username }}</span>
      <p m-0>{{ item.content }}</p>
      <div mt-2>
        <span text-sm text-gray-4>2022-11-14</span>
        <span text-sm ml-3 text-gray-4 cursor-pointer hover:hover:text-blue-5
          >回复</span
        >
      </div>
      <!-- 递归组件 -->
      <CommentItem v-if="'children' in item" :commentList="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  commentList: any[]
}

defineProps<Props>()
</script>

<style scoped>
.boundary {
  @apply border-b-1 border-b-gray-3;
}
</style>
