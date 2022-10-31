# Guide

🌟Just a simple vue components UI library.

- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins 实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭建
- 基于 Action CI 实现持续集成与交付

## Quick Star

```shell
pnpm add simple-ui-vite
```

```js
import { createApp } from 'vue'
import SimpleUI from 'simple-ui'

const App = {
  template: `<SButton>Hello Simple UI👋</SButton>`,
}

createApp(App).use(SimpleUI).mount('#app')
```