<template>
  <RouterView />
  <template v-if="showFooter">
    <Footer />
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
const showFooter = computed(() => route.path !== '/login')
</script>

<style>
body {
  background-color: rgb(243, 243, 243);
}
</style>
