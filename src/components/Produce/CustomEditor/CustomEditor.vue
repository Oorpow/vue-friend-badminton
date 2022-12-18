<template>
  <div class="editor_container">
    <div>
      <!-- 标题 -->
      <ElInput
        type="textarea"
        v-model="invitationForm.title"
        style="font-size: 28px"
        v-bind="textareaConfig"
        resize="none"
      />
      <!-- 工具栏 -->
      <Toolbar
        style="border-bottom: 1px solid #e5e7eb"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="invitationForm.content"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
      <!-- 设置区 -->
      <div p-y-2 border-t-1 border-gray-2>
        <!-- 标签分类 -->
        <div>
          <span text-sm>请选择分类</span>
          <!-- 标签列表 -->
          <ElCheckboxGroup v-model="invitationForm.tag">
            <ElCheckbox :label="CheckTag.match" />
            <ElCheckbox :label="CheckTag.equipment" />
          </ElCheckboxGroup>
        </div>
        <!-- 封面 -->
        <div mt-3>
          <span text-sm>请设置封面</span>
          <!-- 封面图上传 -->
          <ElUpload
            mt-2
            border-dashed
            border-1
            border-gray-2
            :on-success="uploadSuccess"
            v-bind="uploadConfig"
          >
            <img
              v-if="invitationForm.img"
              :src="invitationForm.img"
              class="avatar"
            />
            <ElIcon v-else :size="60" color="#e5e7eb">
              <PictureFilled />
            </ElIcon>
          </ElUpload>
        </div>
      </div>
    </div>
    <ElButton @click="postArticle" round color="#3b82f6">提交文章</ElButton>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { PictureFilled } from '@element-plus/icons-vue'
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
:deep(.el-upload) {
  @apply w-full h-20;
}
:deep(.el-textarea__inner) {
  box-shadow: none;
}
</style>
