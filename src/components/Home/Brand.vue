<template>
  <div class="w-9/10 mt-20 mx-auto pb-10">
    <div flex justify-center>
      <h2 p-b-2 border-b-blue border-b-4>知名品牌</h2>
    </div>
    <div flex justify-between mt-5>
      <ElImage
        :src="item.url"
        v-for="item in brandList"
        :key="item.id"
        :alt="item.name"
        style="width: 196px; height: 100px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const brandList = [
  { id: 1, url: '/src/assets/images/home-brand/yonex.png', name: '尤尼克斯' },
  { id: 2, url: '/src/assets/images/home-brand/lining.png', name: '李宁' },
  { id: 3, url: '/src/assets/images/home-brand/victor.png', name: '胜利' },
  {
    id: 4,
    url: '/src/assets/images/home-brand/mizuno.png',
    name: '美津浓Mizuno',
  },
]
</script>

<style scoped></style>
