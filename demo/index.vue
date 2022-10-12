<template>
  <div>
    <h1>Button</h1>
    <div>
      <SButton>Default</SButton>
      <SButton type="primary">Primary</SButton>
      <SButton type="success">Success</SButton>
      <SButton type="warning">Warning</SButton>
      <SButton type="danger">Danger</SButton>
      <SButton type="info">Info</SButton>
    </div>

    <div>
      <SButton round>Default</SButton>
      <SButton round type="primary">Primary</SButton>
      <SButton round type="success">Success</SButton>
      <SButton round type="warning">Warning</SButton>
      <SButton round type="danger">Danger</SButton>
      <SButton round type="info">Info</SButton>
    </div>

    <div>
      <SButton plain>Default</SButton>
      <SButton plain type="primary">Primary</SButton>
      <SButton plain type="success">Success</SButton>
      <SButton plain type="warning">Warning</SButton>
      <SButton plain type="danger">Danger</SButton>
      <SButton plain type="info">Info</SButton>
    </div>
  </div>
</template>

<script>
import SButton from '../src/Button/Button'
export default {
  name: 'DemoIndex',
  components: { SButton },
}
</script>
