/// <reference types="vitest" />
import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

import Unocss from "./config/unocss";

const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
}

export default defineConfig({

    build: {
        rollupOptions,
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: './src/entry.ts',
            name: 'SimpleUI',
            fileName: 'simply-ui',
            // 导出模块格式
            formats: ['es', 'umd', 'iife']
        }
    },

    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },

    plugins: [
        vue(),
        vueJsx(),
        Unocss()
    ],

    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    }
})