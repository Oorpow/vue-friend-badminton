<template>
  <Header />
  <div class="detail">
    <div class="detail_main">
      <!-- left -->
      <div class="w-7/10 flex flex-col p-r-3">
        <!-- 文章主体 -->
        <ArticleItem />
        <!-- 评论区 -->
        <Comment />
      </div>
      <!-- 右侧其它文章区域 -->
      <div class="detail_main_right">
        <div>
          <span>其它动态</span>
          <OtherArticleItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.detail {
  @apply w-8.5/10 mx-auto mt-3;
}
.detail_main {
  @apply flex;
}
.detail_main .detail_main_right {
  @apply flex flex-col flex-1;
}
</style>
