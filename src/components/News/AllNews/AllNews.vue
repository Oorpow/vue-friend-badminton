<template>
  <div class="w-8/10 mx-auto my-10">
    <div flex justify-around>
      <template v-for="news in newsList" :key="news.id">
        <NewsItem :news="news" />
      </template>
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

<style scoped></style>
