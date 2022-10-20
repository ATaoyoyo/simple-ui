<script lang="ts">
import { ref } from 'vue'

import { SButton } from '../index'

export default {
  name: 'BasicButton',

  components: { SButton },

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
    <SButton @click="onClick">Click {{ count }} time.</SButton>
    <SButton type="primary">Primary</SButton>
    <SButton type="success">Success</SButton>
    <SButton type="warning">Warning</SButton>
    <SButton type="danger">Danger</SButton>
    <SButton type="info">Info</SButton>
    <hr />
    <SButton plain @click="onClick">Click {{ count }} time.</SButton>
    <SButton plain type="primary">Primary</SButton>
    <SButton plain type="success">Success</SButton>
    <SButton plain type="warning">Warning</SButton>
    <SButton plain type="danger">Danger</SButton>
    <SButton plain type="info">Info</SButton>
    <hr />
    <SButton round @click="onClick">Click {{ count }} time.</SButton>
    <SButton round type="primary">Primary</SButton>
    <SButton round type="success">Success</SButton>
    <SButton round type="warning">Warning</SButton>
    <SButton round type="danger">Danger</SButton>
    <SButton round type="info">Info</SButton>
    <hr />
    <SButton disabled>Default</SButton>
    <SButton disabled type="primary">Primary</SButton>
    <SButton disabled type="success">Success</SButton>
    <SButton disabled type="warning">Warning</SButton>
    <SButton disabled type="danger">Danger</SButton>
    <SButton disabled type="info">Info</SButton>
    <hr />
    <SButton icon="i-uil-search">Search</SButton>
    <SButton icon="i-uil-smile-wink" type="primary"></SButton>
    <SButton icon="i-uil-dizzy-meh" type="success"></SButton>
    <SButton icon="i-uil-angry" type="warning"></SButton>
    <SButton icon="i-uil-annoyed" type="danger"></SButton>
    <SButton icon="i-uil-annoyed-alt" type="info"></SButton>
    <SButton plain icon="i-uil-search">Search</SButton>
    <SButton plain icon="i-uil-smile-wink" type="primary"></SButton>
    <SButton plain icon="i-uil-dizzy-meh" type="success"></SButton>
    <SButton plain icon="i-uil-angry" type="warning"></SButton>
    <SButton plain icon="i-uil-annoyed" type="danger"></SButton>
    <SButton plain icon="i-uil-annoyed-alt" type="info"></SButton>

    <SButton circle icon="i-uil-search"></SButton>
    <SButton circle icon="i-uil-smile-wink" type="primary"></SButton>
    <SButton circle icon="i-uil-dizzy-meh" type="success"></SButton>
    <SButton circle icon="i-uil-angry" type="warning"></SButton>
    <SButton circle icon="i-uil-annoyed" type="danger"></SButton>
    <SButton circle icon="i-uil-annoyed-alt" type="info"></SButton>
    <hr />
    <SButton link>default</SButton>
    <SButton link type="primary">Primary</SButton>
    <SButton link type="success">Success</SButton>
    <SButton link type="warning">Warning</SButton>
    <SButton link type="danger">Danger</SButton>
    <SButton link type="info">Info</SButton>

    <SButton link disabled>default</SButton>
    <SButton link disabled type="primary">Primary</SButton>
    <SButton link disabled type="success">Success</SButton>
    <SButton link disabled type="warning">Warning</SButton>
    <SButton link disabled type="danger">Danger</SButton>
    <SButton link disabled type="info">Info</SButton>

    <SButton>
      <template #icon><i class="i-uil-cog"></i></template>
      Settings
    </SButton>

    <SButton loading type="primary">Loading</SButton>
    <SButton loading loading-icon="i-uil-yin-yang" type="primary">Loading</SButton>
    <SButton loading type="primary">
      <template #loading> <i class="i-uil-surprise"></i></template>
      Loading
    </SButton>

    <SButton color="#626aef">Default</SButton>
  </div>
</template>
