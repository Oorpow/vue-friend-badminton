<template>
  <div class="editor_container">
    <div>
      <!-- 标题 -->
      <ElInput
        type="textarea"
        v-model="invitationForm.title"
        style="font-size: 28px"
        v-bind="textareaConfig"
      />
      <!-- 工具栏 -->
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="invitationForm.content"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
      <!-- 封面图上传 -->
      <el-upload
        class="avatar-uploader"
        :on-success="uploadSuccess"
        v-bind="uploadConfig"
      >
        <img
          v-if="invitationForm.img"
          :src="invitationForm.img"
          class="avatar"
        />
        <el-icon v-else class="avatar-uploader-icon">
          <div class="i-ic-baseline-plus"></div>
        </el-icon>
      </el-upload>
      <!-- 标签列表 -->
      <el-checkbox-group v-model="invitationForm.tag">
        <el-checkbox :label="CheckTag.match" />
        <el-checkbox :label="CheckTag.equipment" />
      </el-checkbox-group>
    </div>
    <ElButton @click="postArticle">发布</ElButton>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type { UploadProps } from 'element-plus'
import type { IDomEditor } from '@wangeditor/editor/dist/editor/src/index'
import type { Invitation } from '@/request/api/invitation/types'
import { CheckTag, handleEnum } from '@/utils/handleEnum'
import '@wangeditor/editor/dist/css/style.css'

import {
  serverUrl,
  textareaConfig,
  toolbarConfig,
  editorConfig,
  uploadConfig,
} from './config'
import { useUserStore } from '@/stores/user'
import { useInvitationStore } from '@/stores/invitation'

type InsertFnType = (url: string, alt: string, href: string) => void

const userStore = useUserStore()
const invitationStore = useInvitationStore()

// 服务器接受的表单信息
const invitationForm = reactive<Invitation>({
  title: '',
  content: '',
  tag: [],
  img: '',
  uid: userStore.getUid,
})

// 编辑器实例
const editorRef = shallowRef()

// 富文本自定义上传图片
;(editorConfig as any).MENU_CONF['uploadImage'] = {
  server: serverUrl,
  fieldName: 'invitation',
  customInsert(res: any, insertFn: InsertFnType) {
    insertFn(import.meta.env.VITE_LOCAL_SERVER + res.data.url, '', '')
  },
}

// 保存editor实例
const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// upload封面图上传成功
const uploadSuccess: UploadProps['onSuccess'] = (response) => {
  invitationForm.img = response.data.url
}

// 发布文章
const postArticle = () => {
  // 修正tag的值
  const tagList = handleEnum(invitationForm.tag as any[])
  invitationForm.tag.length = 0
  invitationForm.tag.push(...tagList)
  // 修正表单信息，提交给后台服务器插入数据
  invitationStore.postInvitation(invitationForm)
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<style scoped>
:deep(.avatar-uploader .el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

:deep(.avatar-uploader .el-upload:hover) {
  border-color: var(--el-color-primary);
}

:deep(.el-icon.avatar-uploader-icon) {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
:deep(.el-textarea__inner) {
  box-shadow: none;
}
</style>
