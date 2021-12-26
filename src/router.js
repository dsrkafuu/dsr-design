import { createRouter, createWebHistory } from 'vue-router';
import ColorsTab from './views/ColorsTab.vue';
import VariablesTab from './views/VariablesTab.vue';
import CodeTab from './views/CodeTab.vue';
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
    path: '/variables',
    name: 'VariablesTab',
    component: VariablesTab,
    meta: {
      name: '变量',
    },
  },
  {
    path: '/code',
    name: 'CodeTab',
    component: CodeTab,
    meta: {
      name: '代码',
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
