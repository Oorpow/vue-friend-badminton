<template>
  <div flex items-center w-full h-6 bg-white p-t-1 border-t-1 border-gray-1>
    <div class="w-8/10 m-auto flex items-center justify-center">
      <div w-10>
        <img src="@/assets/images/logo/logo.png" alt="logo" />
      </div>
      <div flex flex-1 justify-center>
        <ul flex>
          <li class="menu_item relative" v-for="item in navList" :key="item.id">
            <span
              mx-3
              cursor-pointer
              font-bold
              text-lg
              text-normal
              @click="navToTargetRoute(item.path)"
              >{{ item.title }}</span
            >
          </li>
        </ul>
      </div>
      <div flex w-10 justify-center items-center>
        <div class="w-2">
          <a href="https://github.com/Oorpow/vue-friend-badminton">
            <img
              src="@/assets/images/footer-icons/github.png"
              alt="github"
              w-full
              h-full
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navList = [
  {
    id: 1,
    title: '社区动态',
    path: '/news/0',
  },
  {
    id: 2,
    title: '近期赛事',
    path: '/match',
  },
]

const navToTargetRoute = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.menu_item span::before {
  content: '';
  position: absolute;
  left: 15px;
  right: 15px;
  height: 2px;
  bottom: 0;
  background-color: #0096d6;
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}
.menu_item span:hover {
  color: #0096d6;
}
.menu_item span:hover::before {
  transform: scale(1);
}
</style>
