import SButton from '../props'

import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('Button', () => {
  // mount
  test('mount @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Primary',
      },
    })

    // 断言
    expect(wrapper.text()).toBe('Primary')
  })
})

describe('color', () => {
  test('default', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button',
      },
    })
    expect(
      wrapper
        .classes()
        .map(v => v.replace('\n', ''))
        .includes('bg-blue-500')
    ).toBe(true)
  })
  test('red', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button',
      },
      props: {
        color: 'red',
      },
    })
    expect(
      wrapper
        .classes()
        .map(v => v.replace('\n', ''))
        .includes('bg-red-500')
    ).toBe(true)
  })
})
