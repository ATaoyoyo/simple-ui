import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetIcons from '@unocss/preset-icons'

const icons = ['search', 'edit', 'check', 'message', 'star-off', 'delete', 'add', 'share']
const safelist = [...icons.map(v => `i-ic-baseline-${v}`)]

export default () =>
  Unocss({
    transformers: [transformerDirective(), transformerAttributifyJsx()],
    presets: [presetUno(), presetAttributify(), presetIcons(), presetRemToPx()],
    shortcuts: {
      'flex-center': 'flex justify-center items-center',
    },
    safelist,
  })
