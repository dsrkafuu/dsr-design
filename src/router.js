import { createRouter, createWebHistory } from 'vue-router';
import ColorsTab from './views/ColorsTab.vue';
import FontsTab from './views/FontsTab.vue';
import NotFound from './views/NotFound.vue';

export const routes = [
  {
    path: '/',
    name: 'ColorsTab',
    component: ColorsTab,
    meta: {
      name: '色彩',
    },
  },
  {
    path: '/fonts',
    name: 'FontsTab',
    component: FontsTab,
    meta: {
      name: '字体',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      name: '404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
