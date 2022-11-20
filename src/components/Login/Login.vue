<template>
  <el-dialog :model-value="isShowValue" @close="hideDialog">
    <el-form :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button class="w-4.8/10">注册</el-button>
        <el-button class="w-4.8/10" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type Props = {
  isShowValue: boolean
}
defineProps<Props>()
const emits = defineEmits(['update:isShowValue'])

const form = reactive({
  name: '',
  pwd: '',
})

const hideDialog = () => {
  emits('update:isShowValue', false)
}
</script>

<style scoped>
:deep(.el-form-item__content) {
  @apply justify-between;
}
</style>
