---
category: Components
sidebar: Button
---

# Button

Commonly used button.

## Basic usage

:::demo

```vue

<template>
  <sm-row class="mb-4">
    <sm-button>Default</sm-button>
    <sm-button type="primary">Primary</sm-button>
    <sm-button type="success">Success</sm-button>
    <sm-button type="warning">Warning</sm-button>
    <sm-button type="danger">Danger</sm-button>
    <sm-button type="info">Info</sm-button>
  </sm-row>

  <sm-row class="mb-4">
    <sm-button plain>Plain</sm-button>
    <sm-button plain type="primary">Primary</sm-button>
    <sm-button plain type="success">Success</sm-button>
    <sm-button plain type="warning">Warning</sm-button>
    <sm-button plain type="danger">Danger</sm-button>
    <sm-button plain type="info">Info</sm-button>
  </sm-row>

  <sm-row class="mb-4">
    <sm-button round>Round</sm-button>
    <sm-button round type="primary">Primary</sm-button>
    <sm-button round type="success">Success</sm-button>
    <sm-button round type="warning">Warning</sm-button>
    <sm-button round type="danger">Danger</sm-button>
    <sm-button round type="info">Info</sm-button>
  </sm-row>

  <sm-row class="mb-4">
    <sm-button type="primary" icon="search"></sm-button>
    <sm-button type="success" icon="edit"></sm-button>
    <sm-button type="warning" icon="check"></sm-button>
    <sm-button type="danger" icon="message"></sm-button>
    <sm-button type="info" icon="delete"></sm-button>
  </sm-row>

</template>
```

:::

## Disabled Button

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

:::demo

```vue

<template>
  <sm-row class="mb-4">
    <sm-button disabled>Default</sm-button>
    <sm-button disabled type="primary">Primary</sm-button>
    <sm-button disabled type="success">Success</sm-button>
    <sm-button disabled type="warning">Warning</sm-button>
    <sm-button disabled type="danger">Danger</sm-button>
    <sm-button disabled type="info">Info</sm-button>
  </sm-row>
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