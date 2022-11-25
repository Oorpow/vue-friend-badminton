<template>
  <div class="editor_container">
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="editorVal"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
      <!-- 封面图上传 -->
      <el-upload
        ref="uploadRef"
        :on-success="uploadSuccess"
        v-bind="uploadConfig"
      >
        <ElIcon class="i-ic-baseline-cloud-upload" size="30"></ElIcon>
        <div class="el-upload__text">
          <em>上传封面图片</em>
        </div>
      </el-upload>
    </div>
    <ElButton @click="postArticle">发布</ElButton>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type { UploadInstance, UploadProps } from 'element-plus'
import type {
  IDomEditor,
  IEditorConfig,
} from '@wangeditor/editor/dist/editor/src/index'
import '@wangeditor/editor/dist/css/style.css'
import type { Invitation } from '@/request/api/invitation/types'
import { useUserStore } from '@/stores/user'

type InsertFnType = (url: string, alt: string, href: string) => void

const store = useUserStore()
const serverUrl = import.meta.env.VITE_LOCAL_SERVER + 'upload/invitation'

// 服务器接受的表单信息
const invitationForm = reactive<Invitation>({
  title: '',
  content: '',
  tag: '',
  img: '',
  uid: store.getUid,
})

// 编辑器实例
const editorRef = shallowRef()
// 富文本输入的内容 HTML
const editorVal = ref('')

// 配置项
const toolbarConfig = {}
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '<p>请输入内容</p>',
  MENU_CONF: {},
}
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

// upload配置项
const uploadConfig = {
  action: serverUrl,
  autoUpload: false,
  drag: true,
  name: 'invitation',
}
// upload实例
const uploadRef = ref<UploadInstance>()

// 上传成功
const uploadSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  invitationForm.img = response.data.url
}

// 发布文章
const postArticle = () => {
  uploadRef.value!.submit()
  invitationForm.content = editorVal.value
  // 修正表单信息，提交给后台服务器插入数据
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<style scoped></style>
