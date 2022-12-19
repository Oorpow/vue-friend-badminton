<template>
  <div class="editor_container">
    <div>
      <ElForm
        ref="invitationFormRef"
        :rules="formRules"
        :model="invitationForm"
      >
        <!-- 标题 -->
        <ElFormItem prop="title">
          <ElInput
            type="textarea"
            v-model="invitationForm.title"
            style="font-size: 28px"
            v-bind="textareaConfig"
            resize="none"
          />
        </ElFormItem>
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
            <ElFormItem prop="tag">
              <ElCheckboxGroup v-model="invitationForm.tag">
                <ElCheckbox
                  v-for="(tag, i) in fixedTag"
                  :key="i"
                  :label="tag"
                ></ElCheckbox>
              </ElCheckboxGroup>
            </ElFormItem>
          </div>
          <!-- 封面 -->
          <div mt-3>
            <span text-sm>请设置封面</span>
            <!-- 封面图上传 -->
            <ElUpload
              mt-2
              list-type="picture-card"
              :limit="1"
              v-model:file-list="pictureList"
              v-bind="uploadConfig"
              :on-remove="handleRemove"
              :on-success="uploadSuccess"
            >
              <ElIcon>
                <Plus />
              </ElIcon>
            </ElUpload>
          </div>
        </div>
      </ElForm>
    </div>
    <ElButton @click="postArticle(invitationFormRef)" round color="#3b82f6"
      >提交文章</ElButton
    >
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive, shallowRef, watch, ref } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { Plus } from '@element-plus/icons-vue'
import type {
  FormInstance,
  FormRules,
  UploadFile,
  UploadProps,
  UploadUserFile,
} from 'element-plus'
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

type Props = {
  editorForm?: Invitation
}

const props = defineProps<Props>()

const localServer = import.meta.env.VITE_LOCAL_SERVER
const fixedTag = ['赛事', '装备']

const userStore = useUserStore()
const invitationStore = useInvitationStore()

const pictureList = reactive<UploadUserFile[]>([])
const invitationFormRef = ref<FormInstance>()
const formRules = reactive<FormRules>({
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  tag: [
    {
      type: 'array',
      required: true,
      message: '至少选择一个标签',
      trigger: 'change',
    },
  ],
})
// 服务器接受的表单信息
let invitationForm = ref<Invitation>({
  title: '',
  content: '',
  tag: [],
  img: '',
  uid: userStore.getUid,
})

watch(
  () => props.editorForm,
  (newVal) => {
    if (newVal) {
      invitationForm.value = newVal as Invitation
      let extension = ''
      if (invitationForm.value.img) {
        const extensionList = invitationForm.value.img.split('/')
        extension = extensionList[extensionList.length - 1]
      }
      pictureList.length = 0
      pictureList.push({
        name: extension,
        url: localServer + invitationForm.value.img,
      })
    }
  },
  {
    immediate: true,
    deep: true,
  }
)

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

const handleRemove = (file: UploadFile) => {}
// upload封面图上传成功
const uploadSuccess: UploadProps['onSuccess'] = (response) => {
  invitationForm.value.img = response.data.url
}

// 发布文章
const postArticle = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      // 修正tag的值
      const tagList = handleEnum(invitationForm.value.tag as any[])
      invitationForm.value.tag.length = 0
      invitationForm.value.tag.push(...tagList)
      // 修正表单信息，提交给后台服务器插入数据
      // console.log(invitationForm.value)
      // await invitationStore.postInvitation(invitationForm)
      // 提交成功后，跳转至内容管理区
    } else {
      console.log('oops')
    }
  })
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<style scoped>
:deep(.el-textarea__inner) {
  box-shadow: none;
}
:deep(.el-upload-list) {
  @apply w-full;
}
</style>
