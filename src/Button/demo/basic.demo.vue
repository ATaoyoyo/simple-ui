<script lang="ts">
import { ref } from 'vue'

import { SmButton } from '../index'

export default {
  name: 'BasicButton',

  components: { SmButton },

  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value++
    }

    return { count, onClick }
  },
}
</script>

<template>
  <div>
    <sm-button @click="onClick">Click {{ count }} time.</sm-button>
    <sm-button type="primary">Primary</sm-button>
    <sm-button type="success">Success</sm-button>
    <sm-button type="warning">Warning</sm-button>
    <sm-button type="danger">Danger</sm-button>
    <sm-button type="info">Info</sm-button>
    <hr />
    <sm-button plain @click="onClick">Click {{ count }} time.</sm-button>
    <sm-button plain type="primary">Primary</sm-button>
    <sm-button plain type="success">Success</sm-button>
    <sm-button plain type="warning">Warning</sm-button>
    <sm-button plain type="danger">Danger</sm-button>
    <sm-button plain type="info">Info</sm-button>
    <hr />
    <sm-button round @click="onClick">Click {{ count }} time.</sm-button>
    <sm-button round type="primary">Primary</sm-button>
    <sm-button round type="success">Success</sm-button>
    <sm-button round type="warning">Warning</sm-button>
    <sm-button round type="danger">Danger</sm-button>
    <sm-button round type="info">Info</sm-button>
    <hr />
    <sm-button disabled>Default</sm-button>
    <sm-button disabled type="primary">Primary</sm-button>
    <sm-button disabled type="success">Success</sm-button>
    <sm-button disabled type="warning">Warning</sm-button>
    <sm-button disabled type="danger">Danger</sm-button>
    <sm-button disabled type="info">Info</sm-button>
    <hr />
    <sm-button icon="i-uil-search">Search</sm-button>
    <sm-button icon="i-uil-smile-wink" type="primary"></sm-button>
    <sm-button icon="i-uil-dizzy-meh" type="success"></sm-button>
    <sm-button icon="i-uil-angry" type="warning"></sm-button>
    <sm-button icon="i-uil-annoyed" type="danger"></sm-button>
    <sm-button icon="i-uil-annoyed-alt" type="info"></sm-button>
    <sm-button plain icon="i-uil-search">Search</sm-button>
    <sm-button plain icon="i-uil-smile-wink" type="primary"></sm-button>
    <sm-button plain icon="i-uil-dizzy-meh" type="success"></sm-button>
    <sm-button plain icon="i-uil-angry" type="warning"></sm-button>
    <sm-button plain icon="i-uil-annoyed" type="danger"></sm-button>
    <sm-button plain icon="i-uil-annoyed-alt" type="info"></sm-button>

    <sm-button circle icon="i-uil-search"></sm-button>
    <sm-button circle icon="i-uil-smile-wink" type="primary"></sm-button>
    <sm-button circle icon="i-uil-dizzy-meh" type="success"></sm-button>
    <sm-button circle icon="i-uil-angry" type="warning"></sm-button>
    <sm-button circle icon="i-uil-annoyed" type="danger"></sm-button>
    <sm-button circle icon="i-uil-annoyed-alt" type="info"></sm-button>
    <hr />
    <sm-button link>default</sm-button>
    <sm-button link type="primary">Primary</sm-button>
    <sm-button link type="success">Success</sm-button>
    <sm-button link type="warning">Warning</sm-button>
    <sm-button link type="danger">Danger</sm-button>
    <sm-button link type="info">Info</sm-button>

    <sm-button link disabled>default</sm-button>
    <sm-button link disabled type="primary">Primary</sm-button>
    <sm-button link disabled type="success">Success</sm-button>
    <sm-button link disabled type="warning">Warning</sm-button>
    <sm-button link disabled type="danger">Danger</sm-button>
    <sm-button link disabled type="info">Info</sm-button>

    <sm-button>
      <template #icon><i class="i-uil-cog"></i></template>
      Settings
    </sm-button>

    <sm-button loading type="primary">Loading</sm-button>
    <sm-button loading loading-icon="i-uil-yin-yang" type="primary">Loading</sm-button>
    <sm-button loading type="primary">
      <template #loading> <i class="i-uil-surprise"></i></template>
      Loading
    </sm-button>

    <sm-button color="#626aef">Default</sm-button>
  </div>
</template>
