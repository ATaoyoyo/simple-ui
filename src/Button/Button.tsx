import { defineComponent, toRefs } from 'vue'
// import 'uno.css'

import { props } from './props'

import './style/button.css'

export default defineComponent({
  name: 'sm-button',

  props,

  setup(props, { slots }) {
    const { color, type, round, plain } = toRefs(props)

    let buttonClass = `sm-button rounded sm-button-${type.value || 'default'}`
    if (round.value) buttonClass += ' is-round'
    if (plain.value) buttonClass += ' is-plain'

    const onCLick = e => {
      console.log(e)
    }

    return () => (
      <button
        class={buttonClass}
        style={{ color: color.value || '' }}
        onClick={(e: MouseEvent) => onCLick(e)}
      >
        {props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`} /> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
