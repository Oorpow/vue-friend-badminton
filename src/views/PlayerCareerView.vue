<template>
  <div class="career_page">
    <!-- 生涯背景图 -->
    <div class="career_page_banner w-full h-40"></div>
    <!-- 球员姓名 -->
    <div class="player_name">
      <h2 uppercase>viktor axlesen</h2>
    </div>
    <!-- 主要信息 -->
    <div class="career_page_main">
      <!-- 球员简介 -->
      <PlayerInfo title="简介">
        <template #content>
          <p text-sm>
            维克托·阿萨尔森在羽毛球年轻明星中脱颖而出。他在 2010 年 BWF
            世界青年锦标赛上获胜，这使他成为第一位赢得冠军的欧洲球员。同年，他首次亮相成年队，并在塞浦路斯国际赛上获胜。
            2014年，他在瑞士公开赛黄金大奖赛上大获全胜。2016年，他成为第一位在BWF世界超级系列赛上获得男单冠军的欧洲羽毛球选手。
          </p>
        </template>
      </PlayerInfo>
      <!-- 装备列表 -->
      <div mt-30>
        <PlayerInfo title="使用装备">
          <template #content>
            <div mt-5 flex>
              <template v-for="(item, i) in 4" :key="i">
                <EquipmentItem />
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
              <template v-for="(item, i) in 10" :key="i">
                <HonorItem />
              </template>
            </div>
          </template>
        </PlayerInfo>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerInfo from '@/components/Player/PlayerInfo/PlayerInfo.vue'
import EquipmentItem from '@/components/Player/EquipmentItem/EquipmentItem.vue'
import HonorItem from '@/components/Player/HonorItem/HonorItem.vue'
</script>

<style scoped>
.career_page .career_page_banner {
  background: url('http://img4.yonex.cn/2015/12/21/5677c0c18b483.jpg');
  background-size: cover;
}
.career_page .player_name {
  @apply flex w-1/2 py-3 mx-auto justify-center bg-blue-5 text-white relative -top-10;
}

.career_page .career_page_main {
  @apply w-3/4 mx-auto;
}
</style>
