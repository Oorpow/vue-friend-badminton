
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const Unocss = __unconfig_stub;
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

const __unconfig_default =  defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetIcons()],
      rules: [
        [/^h-(\d+)$/, ([, d]) => ({ height: `${Number(d) * 10}px` })],
        [/^w-(\d+)$/, ([, d]) => ({ width: `${Number(d) * 10}px` })],
        ['bg-primary', { 'background-color': '#eef5f9' }],
        ['bg-minor', { 'background-color': '#f3f3f3' }],
        ['bg-color-primary', { 'background-color': '#3b82f6' }],
      ],
      transformers: [transformerDirectives()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;