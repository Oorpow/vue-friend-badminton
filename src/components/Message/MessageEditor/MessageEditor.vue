<template>
  <!-- 头部上传区域 -->
  <div>
    <div class="i-ic-outline-image"></div>
    <div></div>
  </div>
  <div>
    <el-input v-model="textarea" v-bind="inputConfig" />
  </div>
  <div flex justify-end>
    <div>
      <span text-sm text-gray-4>{{ textarea.length }} / 500</span>
      <el-button ml-2>发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let textarea = ref('')

const inputConfig = {
  maxLength: 300,
  placeholder: '',
  type: 'textarea',
  rows: 2,
  resize: 'none',
}
</script>

<style scoped>
:deep(.el-textarea__inner) {
  background: none;
  box-shadow: none;
}
</style>
