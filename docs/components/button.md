---
category: Components
sidebar: Button按钮
---

# Button 按钮

常用的操作按钮。

[[toc]]

## 基本用法

:::demo

```vue

<template>
  <sm-button>Default</sm-button>
  <sm-button type="primary">Default</sm-button>
  <sm-button type="success">Success</sm-button>
  <sm-button type="warning">Warning</sm-button>
  <sm-button type="danger">Danger</sm-button>
  <sm-button type="info">Info</sm-button>
</template>
```

:::

## Plain按钮

:::demo

```vue

<template>
  <sm-button>Default</sm-button>
  <sm-button plain type="primary">Default</sm-button>
  <sm-button plain type="success">Success</sm-button>
  <sm-button plain type="warning">Warning</sm-button>
  <sm-button plain type="danger">Danger</sm-button>
  <sm-button plain type="info">Info</sm-button>
</template>
```

:::

## 圆角按钮

:::demo

```vue

<template>
  <sm-button>Default</sm-button>
  <sm-button round type="primary">Default</sm-button>
  <sm-button round type="success">Success</sm-button>
  <sm-button round type="warning">Warning</sm-button>
  <sm-button round type="danger">Danger</sm-button>
  <sm-button round type="info">Info</sm-button>
</template>
```

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

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

## 链接按钮

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

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。 您可以在我们的 `Icon` 组件中找到所需图标。 通过向右方添加`<i>`标签来添加图标，
你也可以使用自定义图标。

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

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 `<sm-button-group>` 对多个按钮分组。

:::demo

```vue

<template>
  <sm-button-group>
    <sm-button icon="i-uil-arrow-left" type="primary">Previous Page</sm-button>
    <sm-button type="primary">
      Next Page
      <sm-icon name="i-uil-arrow-right"></sm-icon>
    </sm-button>
  </sm-button-group>

  <sm-button-group>
    <sm-button icon="i-uil-apple" type="primary"></sm-button>
    <sm-button icon="i-uil-10-plus" type="primary"></sm-button>
    <sm-button icon="i-uil-capture" type="primary"></sm-button>
  </sm-button-group>
</template>
```

:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::tip

您可以使用 `loading` 插槽或 `loadingIcon` 属性自定义您的loading图标

ps: `loading` 插槽优先级高于`loadingIcon`属性
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

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

:::demo

```vue

<template>
  <sm-button size="large">Large</sm-button>
  <sm-button>Default</sm-button>
  <sm-button size="small">Small</sm-button>

  <sm-button circle size="large" icon="i-uil-search" />
  <sm-button circle size="default" icon="i-uil-search" />
  <sm-button circle size="small" icon="i-uil-search" />
</template>

```

:::

## Button 属性

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

## Button 插槽

| Name    | Description                 |
| ------- | --------------------------- |
| —       | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

## Button-Group 插槽

| Name | Description                    | Subtags |
| ---- | ------------------------------ | ------- |
| -    | customize button group content | Button  |