<template>
  <div id="app">
    <component :is="loadingLayout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'

export default {
  name: 'App',

  computed: {
    loadingLayout () {    
      return this.$route.meta.layout
    }
  },

  components: {
    MainLayout
  },

};
</script>
