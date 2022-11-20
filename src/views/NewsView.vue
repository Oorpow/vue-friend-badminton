<template>
  <div class="news_page">
    <Header />
    <!-- banner -->
    <div flex flex-col>
      <div class="news_page_banner w-full h-36"></div>
    </div>
    <!-- tabs -->
    <Tabs />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.news_page_banner {
  background: url('http://www.yonex.cn/public/uploads/20210723/cc9de45d958bbc71526ce72c159db73c.jpg')
    no-repeat;
  background-size: cover;
}
</style>
