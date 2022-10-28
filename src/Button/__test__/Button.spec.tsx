import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import { SmButton } from '../index'

describe('Button.vue', () => {
  test('create', () => {
    const wrapper = mount(SmButton, {
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
    const wrapper = mount(SmButton, {
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
    const wrapper = mount(SmButton, {
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
    const wrapper = mount(SmButton, {
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
    const wrapper = mount(SmButton, {
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
    const wrapper = mount(SmButton, {
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
    const wrapper = mount(SmButton, {
      shallow: true,
      props: { icon: 'search' },
    })

    // expect(wrapper.find('sm-icon').attributes('name')).toBe('search')
    expect(wrapper.findComponent({ name: 'sm-icon' }).vm.$options.name).toBe('sm-icon')

    const slotWrapper = mount({
      setup() {
        return () => <SmButton v-slots={{ icon: () => <i class="i-uil-arrow-left" /> }} />
      },
    })

    expect(slotWrapper.find('i').classes('i-uil-arrow-left')).toBe(true)
  })

  test('loading button', async () => {
    const wrapper = mount(() => (
      <SmButton loading v-slots={{ loading: () => <i class="i-uil-surprise" /> }}></SmButton>
    ))

    expect(wrapper.find('span').classes('sm-button__loading')).toBe(true)
    expect(wrapper.classes('is-loading')).toBe(true)
    expect(wrapper.findAll('i')[1].classes('i-uil-surprise')).toBe(true)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
