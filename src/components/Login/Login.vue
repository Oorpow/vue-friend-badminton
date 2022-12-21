<template>
  <div
    class="w-50 p-3 rounded bg-white m-auto absolute left-1/2 top-1/2 translate-x--1/2 translate-y--1/2"
  >
    <div flex justify-center my-3>
      <img src="/src/assets/images/logo/logo.png" alt="logo" />
    </div>
    <el-form
      label-position="top"
      :model="form"
      ref="loginFormRef"
      :rules="loginRules"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button
          class="w-4.8/10"
          @click="handleSubmit(loginFormRef, IsLogin.register)"
          >注册</el-button
        >
        <el-button
          class="w-4.8/10"
          type="primary"
          @click="handleSubmit(loginFormRef, IsLogin.login)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import type { FormInstance, FormRules } from 'element-plus'
import type { ILoginForm } from '@/request/api/user/types'

enum IsLogin {
  register,
  login,
}

const router = useRouter()
const store = useUserStore()
const { getToken } = storeToRefs(store)

// 表单
const form = reactive<ILoginForm>({
  name: '',
  password: '',
})

const loginFormRef = ref<FormInstance>()
const loginRules = reactive<FormRules>({
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

// 用户登录
const handleSubmit = async (
  formEl: FormInstance | undefined,
  isLogin: boolean | number
) => {
  await formEl?.validate(async (valid, fields) => {
    if (valid) {
      if (isLogin) {
        await store.login(form)
        getToken.value && router.push('/')
      } else {
        store.register(form)
      }
    }
  })
}
</script>

<style scoped>
:deep(.el-form-item__content) {
  @apply justify-between;
}
</style>
