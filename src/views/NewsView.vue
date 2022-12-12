<template>
  <Header />
  <div class="news_page relative">
    <div class="w-7/10 mx-auto my-10 flex justify-around relative">
      <!-- tabs -->
      <NewsList />
      <!-- 右侧推荐栏 -->
      <div class="w-1/4">
        <div sticky top-5>
          <RecommendBox>
            <template #title>
              <span text-sm text-gray-4>品牌推荐</span>
            </template>
          </RecommendBox>
          <RecommendBox>
            <template #title>
              <span text-sm text-gray-4>人气球员</span>
            </template>
          </RecommendBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
