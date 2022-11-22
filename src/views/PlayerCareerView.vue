<template>
  <div class="career_page">
    <!-- 生涯背景图 -->
    <div
      class="w-full h-40"
      :style="{
        backgroundImage: `url(${serverUrl + getCurrentPlayer.bannerImg})`,
      }"
    ></div>
    <!-- 球员姓名 -->
    <div class="player_name">
      <h2 uppercase>{{ getCurrentPlayer.name }}</h2>
    </div>
    <!-- 主要信息 -->
    <div class="career_page_main">
      <!-- 球员简介 -->
      <PlayerInfo title="简介">
        <template #content>
          <p text-sm>
            {{ getCurrentPlayer.description }}
          </p>
        </template>
      </PlayerInfo>

      <!-- 装备列表 -->
      <div mt-30>
        <PlayerInfo title="使用装备">
          <template #content>
            <div mt-5 flex>
              <template
                v-for="item in getCurrentPlayer.equipmentList"
                :key="item.id"
              >
                <EquipmentItem :equipment="item" />
              </template>
            </div>
          </template>
        </PlayerInfo>
      </div>

      <!-- 成就列表 -->
      <div mt-30>
        <PlayerInfo title="成就">
          <template #content>
            <div flex justify-between flex-wrap>
              <template
                v-for="item in getCurrentPlayer.honorList"
                :key="item.id"
              >
                <HonorItem :honor="item" />
              </template>
            </div>
          </template>
        </PlayerInfo>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { usePlayerStore } from '@/stores/player'

const route = useRoute()
const store = usePlayerStore()
const serverUrl = import.meta.env.VITE_LOCAL_SERVER

const { getCurrentPlayer } = storeToRefs(store)
store.getTargetPlayer(Number(route.params.id))
</script>

<style scoped>
.career_page .player_name {
  @apply flex w-1/2 py-3 mx-auto justify-center bg-blue-5 text-white relative -top-10;
}

.career_page .career_page_main {
  @apply w-3/4 mx-auto;
}
</style>
