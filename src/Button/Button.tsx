import { defineComponent, toRefs } from 'vue'
import 'uno.css'

import { props, buttonTypeColor } from './props'

export default defineComponent({
  name: 'SButton',

  props,

  setup(props, { slots }) {
    const { color, type, round, plain } = toRefs(props)

    const onCLick = e => {
      console.log(e)
    }

    return () => (
      <button
        class={`btn-${type.value ? type.value : 'default'} ${round.value ? 'rounded-4' : ''}`}
        onClick={(e: MouseEvent) => onCLick(e)}
      >
        {props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`} /> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
