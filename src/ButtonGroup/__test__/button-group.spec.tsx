import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import { SmButton } from '../../Button'
import { SmButtonGroup } from '../index'

const Dio = '砸瓦鲁多！！！'
const JoJo = '食堂泼不辣酱！！！'

describe('button group', () => {
  test('mount button group', () => {
    const wrapper = mount(() => (
      <SmButtonGroup>
        <SmButton>{Dio}</SmButton>
        <SmButton>{JoJo}</SmButton>
      </SmButtonGroup>
    ))

    expect(wrapper.classes()).toContain('sm-button__group')
  })

  test('mount button group button', () => {
    const wrapper = mount(() => (
      <SmButtonGroup>
        <SmButton>{Dio}</SmButton>
        <SmButton>{JoJo}</SmButton>
      </SmButtonGroup>
    ))

    expect(wrapper.html()).toContain(Dio)
    expect(wrapper.html()).toContain(JoJo)
  })
})
