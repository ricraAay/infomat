import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    meta: {
      layout: 'MainLayout'
    },
    component: () => import('@/views/MainPage')
  },
  {
    path: '/department-functional-diagnostics',
    name: 'Department-functional-diagnostics',
    meta: {
      layout: 'MainLayout',
      background: '#27ae60',
      addClass: true
    },
    component: () => import('@/views/FuncDiagnostics')
  },
  {
    path: '/clinicalLaboratory',
    name: 'ClinicalLaboratory',
    meta: {
      layout: 'MainLayout',
      background: '#56ccf2',
      addClass: true
    },
    component: () => import('@/views/ClinicalLaboratory')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
