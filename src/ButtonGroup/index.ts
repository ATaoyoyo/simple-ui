import type { App } from 'vue'

import SmButtonGroup from './ButtonGroup'

export { SmButtonGroup }

export default {
  install(app: App) {
    app.component(SmButtonGroup.name, SmButtonGroup)
  },
}
