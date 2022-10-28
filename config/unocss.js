import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetIcons from '@unocss/preset-icons'

export default () =>
  Unocss({
    transformers: [transformerDirective(), transformerAttributifyJsx()],
    presets: [
      presetIcons({
        mode: 'auto',
        prefix: 'i-',
        autoInstall: true,
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      presetUno(),
      presetAttributify(),
      presetRemToPx(),
    ],
    shortcuts: {
      'flex-center': 'flex justify-center items-center',
    },
  })
