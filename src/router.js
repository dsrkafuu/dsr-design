import { createRouter, createWebHistory } from 'vue-router';
import ColorsTab from './views/ColorsTab.vue';
import ResetTab from './views/ResetTab.vue';
import CodeTab from './views/CodeTab.vue';
import ToolsTab from './views/ToolsTab.vue';
import NotFound from './views/NotFound.vue';

export const routes = [
  {
    path: '/',
    name: 'ResetTab',
    component: ResetTab,
    meta: {
      name: '重置',
    },
  },
  {
    path: '/colors',
    name: 'ColorsTab',
    component: ColorsTab,
    meta: {
      name: '色彩',
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
    path: '/tools',
    name: 'ToolsTab',
    component: ToolsTab,
    meta: {
      name: '工具',
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
