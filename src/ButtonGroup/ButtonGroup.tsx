import { defineComponent } from 'vue'

import './style/button-group.css'

export default defineComponent({
  name: 'sm-button-group',

  setup(props, { slots }) {
    return () => <div class="sm-button__group">{slots.default ? slots.default() : ''}</div>
  },
})
