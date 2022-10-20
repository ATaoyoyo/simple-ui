---
category: Components
sidebar: Button
---



# Button

Commonly used button.

[[toc]]

## Basic usage

:::demo

```vue

<template>
  <div class="mb-4">
    <sm-button>Default</sm-button>
    <sm-button type="primary">Primary</sm-button>
    <sm-button type="success">Success</sm-button>
    <sm-button type="warning">Warning</sm-button>
    <sm-button type="danger">Danger</sm-button>
    <sm-button type="info">Info</sm-button>
  </div>

  <div class="mb-4">
    <sm-button plain>Plain</sm-button>
    <sm-button plain type="primary">Primary</sm-button>
    <sm-button plain type="success">Success</sm-button>
    <sm-button plain type="warning">Warning</sm-button>
    <sm-button plain type="danger">Danger</sm-button>
    <sm-button plain type="info">Info</sm-button>
  </div>

  <div class="mb-4">
    <sm-button round>Round</sm-button>
    <sm-button round type="primary">Primary</sm-button>
    <sm-button round type="success">Success</sm-button>
    <sm-button round type="warning">Warning</sm-button>
    <sm-button round type="danger">Danger</sm-button>
    <sm-button round type="info">Info</sm-button>
  </div>

  <div class="mb-4">
    <sm-button icon="i-uil-annoyed-alt"></sm-button>
    <sm-button type="primary" icon="i-uil-annoyed"></sm-button>
    <sm-button type="success" icon="i-uil-smile-wink"></sm-button>
    <sm-button type="warning" icon="i-uil-dizzy-meh"></sm-button>
    <sm-button type="danger" icon="i-uil-angry"></sm-button>
    <sm-button type="info" icon="i-uil-annoyed"></sm-button>
  </div>

</template>
```

:::

## Disabled Button

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

:::demo

```vue

<template>
  <div class="mb-4">
    <sm-button disabled>Default</sm-button>
    <sm-button disabled type="primary">Primary</sm-button>
    <sm-button disabled type="success">Success</sm-button>
    <sm-button disabled type="warning">Warning</sm-button>
    <sm-button disabled type="danger">Danger</sm-button>
    <sm-button disabled type="info">Info</sm-button>
  </div>
  <div class="mb-4">
    <sm-button plain disabled>Default</sm-button>
    <sm-button plain disabled type="primary">Primary</sm-button>
    <sm-button plain disabled type="success">Success</sm-button>
    <sm-button plain disabled type="warning">Warning</sm-button>
    <sm-button plain disabled type="danger">Danger</sm-button>
    <sm-button plain disabled type="info">Info</sm-button>
  </div>
</template>

```

:::

## Link Button

::: warning
type="text" has been deprecated, and will be removed in 3.0.0, consider switching to new API.
New API link has been added in 2.2.1, you can use type API to set the theme of your link button
:::

:::demo

```vue

<template>
  <p>Basic link button</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <sm-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
    >
      {{ button.text }}
    </sm-button>
  </div>

  <p>Disabled link button</p>
  <div class="flex justify-space-between flex-wrap gap-4">
    <sm-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      disabled
    >{{ button.text }}
    </sm-button>
  </div>
</template>

<script setup lang="ts">
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const
</script>
```

:::

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

Use the icon attribute to add icon. You can find the icon list in Element Plus icon component. Adding icons to the right
side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

:::demo

```vue

<template>
  <sm-button icon="i-uil-arrow-left" type="primary"></sm-button>
  <sm-button icon="i-uil-sun" type="primary"></sm-button>
  <sm-button icon="i-uil-setting" type="primary"></sm-button>
  <sm-button icon="i-uil-search" type="primary">Search</sm-button>
  <sm-button type="primary">
    Download
    <i class="i-uil-arrow-to-bottom"></i>
  </sm-button>
</template>
```

:::

## Loading Button

Click the button to load data, then the button displays a loading state.

Set loading attribute to true to display loading state.



:::tip

You can use the loading slot or loadingIcon to customize your loading component

ps: loading slot has higher priority than loadingIcon
:::

:::demo

```vue

<template>
  <sm-button loading type="primary">Loading</sm-button>
  <sm-button loading loading-icon="i-uil-yin-yang" type="primary">Loading</sm-button>
  <sm-button loading type="primary">
    <template #loading>
      <i class="i-uil-vector-square"></i>
    </template>
    Loading
  </sm-button>
</template>
```

:::


## Custom Color

You can custom button color.

We will calculate hover color & active color automatically.

:::demo
```vue
<template>
  <sm-button color="#626aef">Default</sm-button>
</template>
```

:::


## Button Attributes

| Name                                | Description                                                     | Type                  | Accepted Values                                               | Default |
| ----------------------------------- | --------------------------------------------------------------- | --------------------- | ------------------------------------------------------------- | ------- |
| size                                | button size                                                     | string                | large / default /small                                        | —       |
| type                                | button type                                                     | string                | primary / success / warning / danger / info / <del>text</del> | —       |
| plain                               | determine whether it's a plain button                           | boolean               | —                                                             | false   |
| text | determine whether it's a text button                            | boolean               | —                                                             | false   |
| bg    | determine whether the text button background color is always on | boolean               | —                                                             | false   |
| link  | determine whether it's a link button                            | boolean               | —                                                             | false   |
| round                               | determine whether it's a round button                           | boolean               | —                                                             | false   |
| circle                              | determine whether it's a circle button                          | boolean               | —                                                             | false   |
| loading                             | determine whether it's loading                                  | boolean               | —                                                             | false   |
| loading-icon                        | customize loading icon component                                | `string \| Component` | —                                                             | Loading |
| disabled                            | disable the button                                              | boolean               | —                                                             | false   |
| icon                                | icon component                                                  | `string \| Component` | —                                                             | —       |
| autofocus                           | same as native button's `autofocus`                             | boolean               | —                                                             | false   |
| native-type                         | same as native button's `type`                                  | string                | button / submit / reset                                       | button  |
| auto-insert-space                   | automatically insert a space between two chinese characters     | boolean               |                                                               | —       |

## Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| —       | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

## Button-Group Attributes

| Name | Description                                      | Type   | Accepted Values                             | Default |
| ---- | ------------------------------------------------ | ------ | ------------------------------------------- | ------- |
| size | control the size of buttons in this button-group | string | large / default /small                      | —       |
| type | control the type of buttons in this button-group | string | primary / success / warning / danger / info | —       |

## Button-Group Slots

| Name | Description                    | Subtags |
| ---- | ------------------------------ | ------- |
| -    | customize button group content | Button  |