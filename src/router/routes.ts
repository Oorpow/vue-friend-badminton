import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/player/:id',
    name: 'player',
    component: () => import('@/views/PlayerView.vue'),
    children: [
      {
        path: 'career',
        name: 'career',
        component: () => import('@/views/PlayerCareerView.vue'),
      },
    ],
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
  },
  {
    path: '/news_det/:id',
    name: 'detail',
    component: () => import('@/views/DetailView.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/MessageView.vue'),
  },
  {
    path: '/produce',
    name: 'produce',
    component: () => import('@/views/ProduceView.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/AccountView.vue'),
    redirect: '/account/home',
    children: [
      {
        path: 'home',
        name: 'account-home',
        component: () => import('@/components/Account/AccountHome.vue'),
      },
      {
        path: 'request',
        name: 'account-request',
        component: () =>
          import(
            '@/components/Account/AccountFriendRequest/AccountFriendRequest.vue'
          ),
      },
    ],
  },
]

export default routes
