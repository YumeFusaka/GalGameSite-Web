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
          path: '/galGame-twelve-voting/vote',
          component: () => import('../views/Activity/GalGameTwelveVoting/Vote/VoteView.vue'),
        },
        {
          path: '/galGame-twelve-voting/tier',
          component: () => import('../views/Activity/GalGameTwelveVoting/Tier/TierView.vue'),
        },
        {
          path: '/galgame-tier-maker',
          component: () => import('../views/Activity/GalGameTierMaker/TierMakerView.vue'),
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
