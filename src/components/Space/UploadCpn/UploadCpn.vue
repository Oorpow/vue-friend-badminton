<template>
  <ElUpload
    :action="serverUrl + type"
    :name="type"
    :show-file-list="false"
    :on-success="handleUploadSuccess"
  >
    <ElIcon color="#3b82f6" :style="uploadConfig.uploadStyle">
      <Camera />
    </ElIcon>
  </ElUpload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Camera } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

type UploadConfig = {
  action: string
  uploadStyle: any
}

type Props = {
  uploadConfig: UploadConfig
  type: string
}

const props = defineProps<Props>()
const emits = defineEmits(['updateBgOrAvatar'])

const serverUrl = import.meta.env.VITE_LOCAL_SERVER + 'upload/'

const uploadImgUrl = ref('')

const handleUploadSuccess: UploadProps['onSuccess'] = async (res) => {
  uploadImgUrl.value = res.data.url
  emits('updateBgOrAvatar', props.type, uploadImgUrl.value)
}
</script>

<style scope></style>
