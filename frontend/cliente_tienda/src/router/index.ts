import PersonalAgregarVue from '../modulos/personal/vistas/personalAgregarVue.vue'
import PersonalVue from '../modulos/personal/vistas/personalVue.vue'
import PersonalEditarVue from '../modulos/personal/vistas/personalEditarVue.vue'
import PersonalBorrarVue from '../modulos/personal/vistas/personalBorrarVue.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalVue
    },
    {
      path: '/personal/agregar',
      name: 'personalagregar',
      component: PersonalAgregarVue
    },
    {
      path: '/personal/editar',
      name: 'personaleditar',
      component: PersonalEditarVue
    },
    {
      path: '/personal/borrar',
      name: 'personalborrar',
      component: PersonalBorrarVue
    }
  ],
})

export default router
