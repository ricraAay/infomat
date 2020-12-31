<template>
  <div id="app" @click="touchWindow">
    <component :is="loadingLayout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import Layout from './layouts/Layout'

export default {
  name: 'App',
  data: () => ({
    timer: 5
  }),
  computed: {
    loadingLayout () {    
      return this.$route.meta.layout
    }
  },
  components: {
    Layout
  },
  methods: {
    touchWindow () {

    }
  }

};
</script>
