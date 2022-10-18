import SButton from '../Button'

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
        .includes('sm-button-default')
    ).toBe(true)
  })
  test('red', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button',
      },
      props: {
        type: 'success',
      },
    })
    expect(
      wrapper
        .classes()
        .map(v => v.replace('\n', ''))
        .includes('sm-button-success')
    ).toBe(true)
  })
})

describe('round', () => {
  test('is-round', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Round Button',
      },
      props: {
        round: true,
      },
    })
    expect(
      wrapper
        .classes()
        .map(v => v.replace('\n', ''))
        .includes('is-round')
    ).toBe(true)
  })
})

describe('plain', () => {
  test('is-plain', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Plain Button',
      },
      props: {
        plain: true,
      },
    })

    expect(wrapper.text()).toBe('Plain Button')
    expect(
      wrapper
        .classes()
        .map(v => v.replace('\n', ''))
        .includes('is-plain')
    ).toBe(true)
  })
})
