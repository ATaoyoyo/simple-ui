import SButton from './Button'
import { App } from 'vue'
import 'uno.css'

export { SButton }

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
  },
}
