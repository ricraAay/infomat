import Vue from 'vue'
import Vuex from 'vuex'
import menuCard from './modules/menuCards'
import listTestCDL from './modules/listTestCDL'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menuCard,
    listTestCDL
  }
})
