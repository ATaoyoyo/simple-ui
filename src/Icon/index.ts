import type { App } from 'vue'

import SmIcon from './Icon'

export { SmIcon }

export default {
  install(app: App) {
    app.component(SmIcon.name, SmIcon)
  },
}
