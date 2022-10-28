import { App } from 'vue'
import type { Component } from 'vue'

import '@unocss/reset/normalize.css'
import 'uno.css'

import SButton from './Button/Button'
import SmIcon from './Icon/Icon'

// 单独导出组件
export { SButton, SmIcon }

const Components: Component[] = [SButton, SmIcon]

// install方法，全部导出
export default {
  install(app: App) {
    Components.forEach((cpn: Component) => {
      app.component(cpn.name, cpn)
    })
  },
}
