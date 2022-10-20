import SButton from '../Button'

import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('Button.vue', () => {
  test('create', () => {
    const wrapper = mount(SButton, {
      slots: {
        default: 'Just a primary button!',
      },
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('sm-button__primary')
  })

  test('round', () => {
    const wrapper = mount(SButton, {
      slots: {
        default: 'Round Button',
      },
      props: {
        round: true,
      },
    })
    expect(wrapper.classes()).toContain('is-round')
  })

  test('plain', () => {
    const wrapper = mount(SButton, {
      slots: {
        default: 'Plain Button',
      },
      props: {
        plain: true,
      },
    })
    expect(wrapper.classes()).toContain('is-plain')
  })

  test('disabled', async () => {
    const wrapper = mount(SButton, {
      slots: {
        default: 'can not click me!',
      },
      props: {
        type: 'primary',
        disabled: true,
      },
    })

    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
