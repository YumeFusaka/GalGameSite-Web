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
        {
          path: '/vote',
          component: () => import('../views/Activity/Vote/VoteView.vue'),
        },
        {
          path: '/rank',
          component: () => import('../views/Activity/Rank/RankView.vue'),
        },
        {
          path: '/result',
          component: () => import('../views/Activity/Result/ResultView.vue'),
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/Login/LoginView.vue'),
    }
  ]
})

export default router
