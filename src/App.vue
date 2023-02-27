<template>
  <div min-h-90vh>
    <RouterView />
  </div>
  <template v-if="showFooter">
    <Footer />
  </template>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer/Footer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const forbiddenList = ['/login', '/space']

const showFooter = computed(() => {
  let val = true
  forbiddenList.forEach((item) => {
    if (route.path.startsWith(item)) {
      val = false
    }
  })
  return val
})
</script>

<style>
body {
  min-height: 80vh;
  /* font-family: var(--el-font-family); */
}
</style>
