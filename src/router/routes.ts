import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
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
    path: '/news/:type',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
  },
  {
    path: '/news_det/:id',
    name: 'detail',
    component: () => import('@/views/DetailView.vue'),
  },
  {
    path: '/match',
    name: 'match',
    component: () => import('@/views/MatchView.vue'),
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
    path: '/space/:id',
    name: 'space',
    component: () => import('@/views/SpaceView.vue'),
  },
]

export default routes
