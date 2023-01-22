import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import importToCDN from 'vite-plugin-cdn-import'
import viteCompression from 'vite-plugin-compression'

import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://unpkg.com/vue@3',
        },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: 'lib/index.iife.min.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus@2.2.28',
          css: 'https://unpkg.com/element-plus/dist/index.css',
        },
      ],
    }),
    visualizer({
      open: true,
      gzipSize: true,
    }),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetIcons()],
      rules: [
        [/^h-(\d+)$/, ([, d]) => ({ height: `${Number(d) * 10}px` })],
        [/^w-(\d+)$/, ([, d]) => ({ width: `${Number(d) * 10}px` })],
        ['bg-primary', { 'background-color': '#eef5f9' }],
        ['bg-minor', { 'background-color': '#f3f3f3' }],
        ['bg-color-primary', { 'background-color': '#3b82f6' }],
        ['text-primary', { color: '#414141' }],
      ],
      transformers: [transformerDirectives()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    minify: false,
    assetsInlineLimit: 5000,
  },
})
