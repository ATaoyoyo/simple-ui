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
    <SButton icon="search">Search</SButton>
    <SButton icon="add" type="primary"></SButton>
    <SButton icon="delete" type="success"></SButton>
    <SButton icon="share" type="warning"></SButton>
    <SButton icon="check" type="danger"></SButton>
    <SButton icon="edit" type="info"></SButton>
    <SButton plain icon="search"></SButton>
    <SButton plain icon="add" type="primary"></SButton>
    <SButton plain icon="delete" type="success"></SButton>
    <SButton plain icon="share" type="warning"></SButton>
    <SButton plain icon="check" type="danger"></SButton>
    <SButton plain icon="edit" type="info"></SButton>

    <SButton plain circle icon="search"></SButton>
    <SButton plain circle icon="add" type="primary"></SButton>
    <SButton plain circle icon="delete" type="success"></SButton>
    <SButton plain circle icon="share" type="warning"></SButton>
    <SButton plain circle icon="check" type="danger"></SButton>
    <SButton plain circle icon="edit" type="info"></SButton>
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
      <template #icon>1</template>
      Custom Icon
    </SButton>
  </div>
</template>
