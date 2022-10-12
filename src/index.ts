import { createApp } from 'vue'
import initUnocssRuntime from '@unocss/runtime'

import SimpleUI from './entry'

import DemoIndex from '../demo/index.vue'

initUnocssRuntime({ defaults: { presets: [] } })

createApp(DemoIndex).use(SimpleUI).mount('#app')
