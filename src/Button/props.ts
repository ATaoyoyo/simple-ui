import { PropType } from 'vue'

export type buttonTypes =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'text'
  | ''

export type buttonSizes = 'large' | 'default' | 'small'

export type buttonNativeTypes = 'button' | 'submit' | 'reeset'

export const props = {
  type: {
    type: String as PropType<buttonTypes>,
    default: '',
  },
  nativeType: {
    type: String as PropType<buttonNativeTypes>,
    default: 'button',
  },
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<buttonSizes>,
    default: 'default',
  },
  disabled: Boolean,
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
}

export const buttonTypeColor = new Map([
  ['', 'btn-default'],
  ['default', 'btn-default'],
  ['primary', 'btn-blue'],
  ['success', 'btn-green'],
  ['warning', 'btn-yellow'],
  ['info', 'btn-gray'],
  ['danger', 'btn-red'],
  ['text', 'btn-blue'],
])
