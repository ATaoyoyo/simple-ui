<div align="center">
<img style="width:200px;" src="https://user-images.githubusercontent.com/39755480/188309691-4c8bb404-ea86-4f8c-8a75-03a97ff28b79.png" />
</div>

<h1 align="center">🔧Simple UI</h1>
<h3 align="center">A simple ui component library with vue3🏴‍☠️, build on vite⚡.</h3>
<div align="center">
  <img src="https://img.shields.io/github/issues/ATaoyoyo/t-ui" />
  <img src="https://img.shields.io/github/forks/ATaoyoyo/t-ui" />
  <img src="https://img.shields.io/github/stars/ATaoyoyo/t-ui" />
  <img src="https://img.shields.io/github/license/ATaoyoyo/t-ui" />

  [![codecov](https://codecov.io/gh/ATaoyoyo/simple-ui/branch/main/graph/badge.svg?token=VVDHCRFSAM)](https://codecov.io/gh/ATaoyoyo/simple-ui)

</div>

## Features

前端工程化组件库轮子 🚗,可以没用,但不能没有。

- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins 实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭建
- 基于 Action CI 实现持续集成与交付

## Install

```shell
npm i simple-ui-vite
```

or

```shell
yarn add simple-ui-vite
```

## Quick Start

```js
import { createApp } from 'vue'
import SimpleUI from 'simple-ui'

const App = {
  template: `<SButton>Hello Terrific UI👋</SButton>`,
}

createApp(App).use(SimpleUI).mount('#app')
```

## Maintainers

[@ATaoyoyo](https://github.com/ATaoyoyo)

## Contributing

🤝 需要你的加入 | Need your participation

🤔 打开一个 issue 吧 | [Open a issue](https://github.com/ATaoyoyo/t-ui/issues/new)

### Contributors

🙏 感谢帮助

<a href="https://github.com/ATaoyoyo"><img width=50 src="https://avatars.githubusercontent.com/u/39755480?v=4" /></a>

## License

[MIT](https://github.com/ataoyoyo/t-ui/blob/main/license) © ATaoyoyo
