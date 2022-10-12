import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'

const colors = ['default', 'primary', 'success', 'warning', 'danger', 'info']

const icons = ['search', 'edit', 'check', 'message', 'star-off', 'delete', 'add', 'share']

const safelist = [
  ...colors.map(v => `btn-${v}`),
  ...colors.map(v => `btn-plain-${v}`),
  ...icons.map(v => `i-ic-baseline-${v}`),
]

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
    shortcuts: {
      btn: 'py-2 px-4 text-white font-semibold cursor-pointer transition-300 border rounded-1',
      'btn-default':
        'btn text-gray-500 bg-white border-gray-300 hover:bg-blue-200 hover:text-blue-500 hover:border-blue-200 active:bg-blue-400 active:border-blue-400',
      'btn-primary':
        'btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 active:bg-blue-600 active:border-blue-600',
      'btn-success':
        'btn bg-green-500 border-green-500 hover:bg-green-400 hover:border-green-400 active:bg-green-600 active:border-green-600',
      'btn-warning':
        'btn bg-yellow-500 border-yellow-500 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-600 active:border-yellow-600',
      'btn-danger':
        'btn bg-red-500 border-red-500 hover:bg-red-400 hover:border-red-400 active:bg-red-600 active:border-red-600',
      'btn-info':
        'btn bg-gray-500 border-gray-500 hover:bg-gray-400 hover:border-gray-400 active:bg-gray-600 active:border-gray-600',
    },
  })
