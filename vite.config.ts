import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
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
