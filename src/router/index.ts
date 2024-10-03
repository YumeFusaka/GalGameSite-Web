import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Layout/LayoutView.vue'),
      redirect: '/vote',
      children: [
        {
          path: '/home',
          component: () => import('../views/Home/HomeView.vue'),
        },
        {
          path: '/vote',
          component: () => import('../views/Vote/VoteView.vue'),
        }
      ]
    },
  ]
})

export default router
