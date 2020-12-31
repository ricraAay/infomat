<template>
  <v-app id="inspire">
    <v-main 
      class="main"
      :class="{ main_active: active }"
    >
      
      <v-row 
        class="head"
        :style="{ background: $route.meta.color }"
      >
        <v-container class="container">
          <v-row class="justify-space-between align-center pl-3 pr-3">

            <div 
              class="head__title"
              :class="{ head__title_active: active }"
            >
              <div>Консультативно - </div>
              <div>диагностический</div>
              <div>центр</div>
            </div>

            <button 
              v-if="active"
              @click="$router.push('/')"
              class="bttn"
            >
              Меню
            </button>

          </v-row>
        </v-container>

      </v-row>

      <v-container class="container">
        <transition name="component-fade" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
      


    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    active () {
      return this.$route.meta.active
    }
  }
}
</script>
