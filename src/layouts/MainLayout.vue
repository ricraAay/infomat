<template>
  <v-app id="inspire">
    <v-main class="v-main blue-grey lighten-5">
      
      <v-row 
        class="v-head"
        :class="{'v-head_small': notMainPage}"
        :style="{background: $route.meta.background}"
      >
        <v-container class="v-container">
          <v-row class="justify-space-between align-center pl-3 pr-3">

            <div 
              class="v-head__title"
              :class="{'v-head__title_small': notMainPage}"
            >
              <div>Консультативно - </div>
              <div>диагностический</div>
              <div>центр</div>
            </div>

            <button 
              v-if="notMainPage"
              @click="$router.push('/')"
              class="btn"
            >
              Меню
            </button>

          </v-row>
        </v-container>

      </v-row>

      <v-container class="v-container">
        <transition name="component-fade" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
      


    </v-main>
  </v-app>
</template>

<script>
import '@/assets/head.scss'

export default {
  name: 'Main',
  computed: {
    notMainPage () {
      return this.$route.meta.addClass
    }
  }
}
</script>

<style scoped>
  
  .btn {
    background: #cacaca5d;
    height: 40px;
    padding: 10px 20px;
    border-radius: 6px;
    color: #fff;
  }

  .btn:focus {
    outline: none;
  }

  .btn:active {
    transform: scale(.9);
    transition: .1s ease;
  }

  

</style>