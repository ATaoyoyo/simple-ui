import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import { SmIcon } from '../index'

describe('Icon.vue', () => {
  test('create icon', () => {
    const wrapper = mount(SmIcon, {
      props: {
        name: 'i-uil-search',
      },
    })

    expect(wrapper.classes()).toContain('i-uil-search')
  })

  test('icon size', () => {
    const wrapper = mount(SmIcon, {
      props: {
        name: 'apple',
        size: 30,
      },
    })

    expect(wrapper.attributes('style')).toContain('width: 30px')
  })

  test('icon color', () => {
    const wrapper = mount(SmIcon, {
      props: {
        name: 'apple',
        color: '#f66',
      },
    })
    expect(wrapper.attributes('style')).toContain('color: #f66')
  })
})
