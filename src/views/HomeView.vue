<template>
  <Header />
  <div class="w-full m-auto relative bg-white pb-20">
    <!-- 背景 -->
    <div class="home_page_bg relative">
      <div class="absolute top-1/3 left-20">
        <h1 text-white mb-5>
          {{ isLogin ? '发表帖子, 分享趣事' : '加入社区, 以球会友' }}
        </h1>
        <ElButton round color="#3b82f6" @click="navToRoute"
          >立即{{ isLogin ? '发表' : '加入' }}</ElButton
        >
      </div>
    </div>
    <Introduce />
    <Stars :playerList="playerList" />
    <SectionNews
      :list="invitationList.slice(0, 3)"
      v-if="invitationList.length"
    />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Introduce from '@/components/Home/Introduce/Introduce.vue'
import SectionNews from '@/components/Home/SectionNews.vue'
import Stars from '@/components/Home/Stars.vue'

import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/stores/player'
import { useUserStore } from '@/stores/user'
import { useInvitationStore } from '@/stores/invitation'

const router = useRouter()
const userStore = useUserStore()
const playerStore = usePlayerStore()
const invitationStore = useInvitationStore()

const { userInfo } = storeToRefs(userStore)
const { playerList } = storeToRefs(playerStore)
const { invitationList } = storeToRefs(invitationStore)

invitationStore.getInvitationList()
playerStore.getPlayerList()

const isLogin = computed(() => (userInfo.value.id ? true : false))

const navToRoute = () => {
  router.push(isLogin.value ? '/produce' : '/login')
}
</script>

<style scoped>
.home_page_bg {
  height: 500px;
  background: url('/src/assets/images/home-bg/bg.jpg');
  background-position: 50%;
}
</style>
