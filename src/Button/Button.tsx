import { defineComponent, PropType, toRefs } from 'vue'

import type { Type, NativeType, Size } from './interface'

import './style/button.css'

import { SmIcon } from '../Icon'

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

  components: { SmIcon },

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
      size,
    } = toRefs(props)

    const handleClick = (evt: MouseEvent) => {
      if (!disabled.value) emit('click', evt)
      else evt.preventDefault()
    }

    const ButtonIcon = (
      <span class={['sm-button__icon', slots.default ? ' mr-1' : '']}>
        {slots.icon ? slots.icon() : <sm-icon name={icon.value} />}
      </span>
    )

    const LoadingIcon = (
      <span class="sm-button__loading">
        <i
          class={[
            'sm-button__icon mr-1',
            `${slots.loading ? '' : loadingIcon.value ? loadingIcon.value : 'i-uil-spinner-alt'}`,
          ]}
        >
          {slots.loading ? slots.loading() : ''}
        </i>
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
          `${link.value && disabled.value ? 'is-disabled' : ''}`,
          `${circle.value ? 'is-circle' : ''}`,
          `${loading.value ? 'is-loading' : ''}`,
          `${disabled.value ? 'is-disabled' : ''}`,
          `${size.value ? 'is-' + size.value : 'is-default'}`,
        ]}
        disabled={disabled.value}
        type={nativeType.value}
        onClick={(e: MouseEvent) => handleClick(e)}
      >
        {icon.value || slots.icon ? ButtonIcon : ''}
        {loading.value ? LoadingIcon : ''}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
