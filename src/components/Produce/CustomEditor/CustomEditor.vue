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
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
    </div>
    <ElButton @click="postArticle">发布</ElButton>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type {
  IDomEditor,
  IEditorConfig,
} from '@wangeditor/editor/dist/editor/src/index'
import '@wangeditor/editor/dist/css/style.css'

// 编辑器实例
const editorRef = shallowRef()

// editor输入的内容 HTML
const valueHtml = ref('')

// 配置项
const toolbarConfig = {}
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '<p>请输入内容</p>',
}

// 保存editor实例
const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// 发布文章
const postArticle = () => {
  console.log(valueHtml.value)
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<style scoped></style>
