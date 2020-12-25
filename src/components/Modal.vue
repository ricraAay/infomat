<template>
  <div class="modal-wrapper" v-if="state">
    <div class="modal">

        <slot></slot>

    </div>
  </div>
</template>

<script>
import '@/assets/modal.scss'

export default {
  name: 'Modal',
  props: {
    state: Boolean
  }
}
</script>


