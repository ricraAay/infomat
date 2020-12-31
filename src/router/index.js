import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    meta: {
      layout: 'Layout'
    },
    component: () => import('@/views/Menu')
  },
  {
    path: '/department-functional-diagnostics',
    name: 'department-functional-diagnostics',
    meta: {
      layout: 'Layout',
      color: '#C52672',
      active: true,
    },
    component: () => import('@/views/FuncDiagnostics')
  },
  {
    path: '/clinical-laboratory',
    name: 'clinical-laboratory',
    meta: {
      layout: 'Layout',
      color: '#71B5DB',
      active: true,
    },
    component: () => import('@/views/ClinicalLaboratory')
  },
  {
    path: '/endoscopy',
    name: 'endoscopy',
    meta: {
      layout: 'Layout',
      color: '#219653',
      active: true,
    },
    component: () => import('@/views/Endoscopy')
  },
  {
    path: '/ultrasound-procedure',
    name: 'ultrasound-procedure',
    meta: {
      layout: 'Layout',
      color: '#2667C0',
      active: true,
    },
    component: () => import('@/views/UltrasoundProcedure')
  },
  {
    path: '/radiation-diagnostics',
    name: 'radiation-diagnostics',
    meta: {
      layout: 'Layout',
      color: '#6a3bc2',
      active: true,
    },
    component: () => import('@/views/RadiationDiagnostics')
  },
  {
    path: '/microbiological-laboratory',
    name: 'microbiological-laboratory',
    meta: {
      layout: 'Layout',
      color: '#CFA62A',
      active: true,
    },
    component: () => import('@/views/MicrobiologicalLaboratory')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
