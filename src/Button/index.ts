import { App } from 'vue'

import SmButton from './Button'

export { SmButton }

export default {
  install(app: App) {
    app.component(SmButton.name, SmButton)
  },
}
