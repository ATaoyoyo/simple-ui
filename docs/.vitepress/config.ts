const sidebar = [
  {
    text: '简介',
    items: [{ text: '快速开始', link: '/guide/' }],
  },
  {
    text: '组件',
    items: [
      { text: 'Button', link: '/components/button' },
      { text: 'Border', link: '/components/border' },
    ],
  },
]

const config = {
  title: 'Simple UI',
  description: 'A simple Vue3 UI Components',
  head:[
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    siteTitle: 'Simple UI',
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/ATaoyoyo/simple-ui' }],
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Configs', link: '/configs' },
      { text: 'Components', link: '/components' },
    ],
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present ATAOYOYO',
    },
  },

  markdown: {
    config: md => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    },
  },
}

export default config
