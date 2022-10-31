import { App } from 'vue'
import type { Component } from 'vue'

import '@unocss/reset/normalize.css'
import 'uno.css'

import { SmButton } from './Button'
import { SmButtonGroup } from './ButtonGroup'
import { SmIcon } from './Icon'

// 单独导出组件
export { SmButton, SmButtonGroup, SmIcon }

const Components: Component[] = [SmButton, SmButtonGroup, SmIcon]

// install方法，全部导出
export default {
  install(app: App) {
    Components.forEach((cpn: Component) => {
      app.component(cpn.name, cpn)
    })
  },
}
