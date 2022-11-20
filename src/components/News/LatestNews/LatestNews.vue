<template>
  <div class="latest">
    <div class="latest_main">
      <!-- 大动态 -->
      <div flex justify-between>
        <div class="w-6.6/10 overflow-hidden">
          <img
            src="https://bwfbadminton.com/wp-content/uploads/2022/05/BWF-red-banner-972x406-1-613x290.jpg"
            alt=""
            class="news_img"
          />
        </div>
        <div class="w-3/10">
          <h1 hover:text-blue-5 transition cursor-pointer>
            BWF Reviewing HYLO Open 2022 Men’s Singles Final
          </h1>
          <div class="news_info_author">
            <span>Oorpow</span>
          </div>
        </div>
      </div>
      <!-- 底部三小动态 -->
      <div flex mt-1 justify-between>
        <template v-for="news in newsList" :key="news.id">
          <NewsItem :news="news" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const newsList = [
  {
    id: 1,
    url: 'https://bwfbadminton.com/wp-content/uploads/2022/10/20221020_1856_DenmarkOpen2022_BPYN8697-400x310.jpg',
  },
  {
    id: 2,
    url: 'https://bwfbadminton.com/wp-content/uploads/2022/10/20221029_1550_FrenchOpen2022_BPMR3343PK-400x310.jpg',
  },
  {
    id: 3,
    url: 'https://bwfbadminton.com/wp-content/uploads/2022/11/YFO_Loh-Kean-Yew-400x310.jpg',
  },
]
</script>

<style scoped>
.latest {
  @apply w-8/10 mx-auto mt-10;
}
.latest .news_img {
  @apply w-full h-full hover:scale-105 transition cursor-pointer;
}
</style>
