<template>
  <Header />
  <div class="news_page relative">
    <div class="w-7/10 mx-auto my-10 flex justify-around relative">
      <!-- tabs -->
      <NewsList />
      <!-- 右侧推荐栏 -->
      <div class="w-1/4">
        <div sticky top-5>
          <RecommendBox :list="tagList" :isTag="true">
            <template #title>
              <span text-sm text-gray-4>相关标签</span>
            </template>
          </RecommendBox>
          <RecommendBox :list="brandList" :isTag="false">
            <template #title>
              <span text-sm text-gray-4>品牌推荐</span>
            </template>
          </RecommendBox>
          <RecommendBox :list="playerList" :isTag="false">
            <template #title>
              <span text-sm text-gray-4>人气球员</span>
            </template>
          </RecommendBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBrandStore } from '@/stores/brand'
import { usePlayerStore } from '@/stores/player'

const brandStore = useBrandStore()
const playerStore = usePlayerStore()
const { brandList } = storeToRefs(brandStore)
const { playerList } = storeToRefs(playerStore)

brandStore.getBrandList()
playerStore.getPlayerList()

const tagList = [
  {
    id: 1,
    avatar: '/src/assets/images/tag/competition.jpeg',
    name: '赛事',
  },
  {
    id: 2,
    avatar: '/src/assets/images/tag/racket.jpg',
    name: '装备',
  },
]
</script>

<style scoped></style>
