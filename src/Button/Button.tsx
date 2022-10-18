import { defineComponent, PropType, toRefs } from 'vue'

import type { Type, NativeType, Size } from './interface'

import './style/button.css'

const buttonProps = {
  type: {
    type: String as PropType<Type>,
    default: '',
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button',
  },
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<Size>,
    default: 'default',
  },
  disabled: Boolean,
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  loadingIcon: String,
  color: String,
}

export default defineComponent({
  name: 'sm-button',

  props: buttonProps,

  emits: ['click'],

  setup(props, { slots, emit }) {
    const {
      type,
      round,
      plain,
      link,
      disabled,
      icon,
      loading,
      loadingIcon,
      nativeType,
      circle,
      color,
    } = toRefs(props)

    const handleClick = (evt: MouseEvent) => {
      if (!disabled.value) emit('click', evt)
      else evt.preventDefault()
    }

    const ButtonIcon = (
      <i
        class={['sm-button__icon', `${slots.default ? 'mr-1' : ''}`, `i-ic-baseline-${icon.value}`]}
      >
        {slots.icon?.()}
      </i>
    )

    const LoadingIcon = (
      <span class="sm-button__loading">
        <i class={['sm-button__icon mr-1', `${loadingIcon.value ? '' : 'i-ic-baseline-message'}`]}>
          {slots.loading ? slots.loading() : ''}
        </i>
      </span>
    )

    const Children = (
      <span class="sm-button__pre">
        {icon.value || slots.icon ? ButtonIcon : ''}
        {loading.value ? LoadingIcon : ''}
      </span>
    )

    return () => (
      <button
        class={[
          'sm-button',
          `sm-button__${type.value || 'default'}`,
          `${round.value ? 'is-round' : ''}`,
          `${plain.value && !link.value ? 'is-plain' : ''}`,
          `${link.value ? 'is-link' : ''}`,
          `${circle.value ? 'is-circle' : ''}`,
          `${loading.value ? 'is-loading' : ''}`,
          `${disabled.value || link.value ? 'is-disabled' : ''}`,
        ]}
        disabled={disabled.value}
        type={nativeType.value}
        style={{ color: color.value || '' }}
        onClick={(e: MouseEvent) => handleClick(e)}
      >
        {Children}
        <span>{slots.default ? slots.default() : ''}</span>
      </button>
    )
  },
})
