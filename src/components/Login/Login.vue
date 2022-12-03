<template>
  <el-dialog :model-value="isShowValue" @close="hideDialog">
    <el-form :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button class="w-4.8/10" @click="registerHandler">注册</el-button>
        <el-button class="w-4.8/10" type="primary" @click="loginHandler"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { useUserStore } from '@/stores/user'
import type { ILoginForm } from '@/request/api/user/types'

type Props = {
  isShowValue: boolean
}
defineProps<Props>()

const emits = defineEmits(['update:isShowValue'])
const store = useUserStore()

// 隐藏对话框
const hideDialog = () => {
  emits('update:isShowValue', false)
}

// 表单
const form = reactive<ILoginForm>({
  name: '',
  password: '',
})

// 用户登录
const loginHandler = () => {
  store.login(form)
  hideDialog()
  // 登录成功就创建一个socket连接
}

// 用户注册
const registerHandler = () => {
  store.register(form)
  hideDialog()
}
</script>

<style scoped>
:deep(.el-form-item__content) {
  @apply justify-between;
}
</style>
