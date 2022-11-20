<template>
  <div my-5>
    <!-- 评论数量 -->
    <div>
      <span>21 评论</span>
    </div>
    <!-- 评论区主体 -->
    <div mt-7>
      <!-- 发表评论 -->
      <div w-full flex flex-col>
        <div flex w-full h-6>
          <div w-5>
            <ElAvatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              size="default"
              w-6
            />
          </div>
          <div flex w-full h-full border-b-1 border-b-gray-3 p-b-5>
            <ElInput :rows="2" type="textarea" placeholder="please input" />
            <ElButton type="primary" style="height: 100%; margin-left: 10px"
              >发表评论</ElButton
            >
          </div>
        </div>
      </div>
      <!-- 用户评论 -->
      <div mt-10>
        <CommentItem :commentList="commentList" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const commentList = [
  {
    id: 1,
    username: 'a',
    content: '1',
    children: [
      {
        id: 3,
        username: 'a',
        content: '1-1',
        children: [
          {
            id: 4,
            username: 'a',
            content: '1-1-1',
          },
        ],
      },
      {
        id: 7,
        username: 'a',
        content: '1-2',
      },
    ],
  },
  {
    id: 2,
    username: 'b',
    content: '2',
    children: [
      {
        id: 5,
        username: 'b',
        content: '2-1',
      },
    ],
  },
  {
    id: 6,
    username: 'c',
    content: '3',
  },
]
</script>

<style scoped>
:deep(.el-textarea__inner) {
  @apply h-6;
}
</style>
