import { createApp } from 'vue'

import SimpleUI from './entry'

import DemoIndex from '../demo/index.vue'

createApp(DemoIndex).use(SimpleUI).mount('#app')
