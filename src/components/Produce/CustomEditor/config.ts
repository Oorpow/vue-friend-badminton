import type { IEditorConfig } from '@wangeditor/editor/dist/editor/src/index'
export const serverUrl = import.meta.env.VITE_LOCAL_SERVER + 'upload/invitation'

// 文本框配置项
export const textareaConfig = {
  resize: 'none',
  maxlength: '30',
  placeholder: '请输入标题: (30字以内)',
}

// 配置项
export const toolbarConfig = {}
export const editorConfig: Partial<IEditorConfig> = {
  placeholder: '<p>请输入内容</p>',
  MENU_CONF: {},
}

// upload配置项
export const uploadConfig = {
  action: serverUrl,
  name: 'invitation',
  showFileList: false,
}
