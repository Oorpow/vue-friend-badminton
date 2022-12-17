<template>
  <div pt-2 px-2 p-b-2 border-b-1 border-gray-2>
    <ElInput
      size="small"
      clearable
      :prefix-icon="Search"
      placeholder="搜索好友"
      :model-value="modelValue"
      @input="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

type Props = {
  modelValue: string
}

defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const handleSearch = (e: string) => {
  emits('update:modelValue', e.trim())
}
</script>

<style scoped></style>
