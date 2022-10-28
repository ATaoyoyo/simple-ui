import { defineComponent, computed, toRefs } from 'vue'

import type { PropType, CSSProperties } from 'vue'
import type { Size } from './interface'

import { addUint } from '../../utils'

import './style/icon.css'

export default defineComponent({
  name: 'sm-icon',

  props: {
    name: String,
    size: { type: [String, Number] as PropType<Size> },
    color: { type: String },
  },

  setup(props, { slots }) {
    const { size, color, name } = toRefs(props)

    const style = computed<CSSProperties>(() => {
      if (!size.value && !color.value) return {}

      return {
        width: addUint(size.value),
        height: addUint(size.value),
        color: color.value,
      }
    })

    console.log(name.value)

    return () => <i class={['sm-icon', `${name.value}`]} style={style.value}></i>
  },
})
