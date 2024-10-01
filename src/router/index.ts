import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Layout/LayoutView.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('../views/Home/HomeView.vue'),
        },
      ]
    },
  ]
})

export default router
