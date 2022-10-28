<template>
  <div>
    <h1>Button</h1>

    <SButtonDemo />
    <BasicIcon />
  </div>
</template>

<script>
import SButtonDemo from '../src/Button/demo/index.demo.vue'
import BasicIcon from '../src/Icon/demo/basic.demo.vue'

export default {
  name: 'SimpleVue',

  components: { SButtonDemo, BasicIcon },
}
</script>

<style></style>
