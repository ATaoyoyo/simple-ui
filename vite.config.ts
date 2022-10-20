import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Unocss from './config/unocss.js'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true,
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SimpleUI',
      fileName: 'simply-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
  },

  plugins: [vue(), vueJsx(), Unocss()],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },

  server: {
    open: true,
    port: 8080,
    hmr: true,
  },
})
