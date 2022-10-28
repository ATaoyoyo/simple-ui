<script lang="ts">
import { SmIcon } from '../index'

export default {
  name: 'BasicIcon',

  components: { SmIcon },
}
</script>

<template>
  <div>
    <h1>Icon</h1>

    <sm-icon name="i-uil-search" color="#f66" :size="18"></sm-icon>
    <sm-icon name="i-uil-capture"></sm-icon>
    <sm-icon name="i-uil-apple"></sm-icon>
    <sm-icon name="i-uil-camera" color="#ddd"></sm-icon>
    <sm-icon name="i-uil-bell" color="#666" size="60px"></sm-icon>
  </div>
</template>
