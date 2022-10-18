import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default () =>
  Unocss({
    transformers: [transformerDirective(), transformerAttributifyJsx()],
    presets: [presetUno(), presetAttributify(), presetIcons()],
  })
