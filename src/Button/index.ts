import { App } from 'vue'

import SButton from './Button'

export { SButton }

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
  },
}
