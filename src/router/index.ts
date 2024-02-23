import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: () => import('../views/TareasView.vue')
    },
    {
      path: '/tarea-formulario/:id?',
      name: 'tarea-formulario',
      component: () => import('../views/TareaFormularioView.vue')
    },
  ]
})
export default router