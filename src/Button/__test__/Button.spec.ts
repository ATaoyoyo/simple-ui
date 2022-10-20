import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import SButton from '../Button'

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

  test('link button', () => {
    const wrapper = mount(SButton, {
      slots: {
        default: 'link text',
      },
      props: {
        link: true,
      },
    })
    expect(wrapper.classes()).toContain('is-link')
    expect(wrapper.classes('sm-button__primary')).toBe(false)
  })

  test('disabled link button', async () => {
    const wrapper = mount(SButton, {
      slots: {
        default: 'disabled link',
      },
      props: {
        disabled: true,
        link: true,
      },
    })
    expect(wrapper.classes('is-link')).toBe(true)
    expect(wrapper.classes('is-disabled')).toBe(true)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  test('icon button', () => {
    const wrapper = mount(SButton, {
      slots: {
        icon: '<i class="i-uil-arrow-left" />',
      },
    })
    expect(wrapper.find('i').classes('sm-button__icon')).toBe(true)

    const slotWrapper = mount(SButton, {
      slots: { default: '', icon: '<i class="i-uil-arrow-left" />' },
    })
    expect(slotWrapper.findAll('i')[1].classes('i-uil-arrow-left')).toBe(true)
  })

  test('loading button', async () => {
    const wrapper = mount(SButton, {
      slots: { default: 'loading', loading: '<i class="i-uil-surprise" />' },
      props: {
        loading: true,
      },
    })

    expect(wrapper.find('span').classes('sm-button__loading')).toBe(true)
    expect(wrapper.classes('is-loading')).toBe(true)
    expect(wrapper.findAll('i')[1].classes('i-uil-surprise')).toBe(true)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
