import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { Prism } from './global';

const ColorsTab = () => import('./views/ColorsTab.vue');
const ResetTab = () => import('./views/ResetTab.vue');
const CodeTab = () => import('./views/CodeTab.vue');
const ToolsTab = () => import('./views/ToolsTab.vue');
const MarkdownTab = () => import('./views/MarkdownTab.vue');
const APITab = () => import('./views/APITab.vue');
const NotFound = () => import('./views/NotFound.vue');

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
    path: '/markdown',
    name: 'MarkdownTab',
    component: MarkdownTab,
    meta: {
      name: '文章',
    },
  },
  {
    path: '/api',
    name: 'APITab',
    component: APITab,
    meta: {
      name: 'API',
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

router.afterEach((_, __, failure) => {
  if (!failure) {
    // highlight after route mounted
    nextTick(() => {
      Prism.highlightAll();
    });
  }
});

export default router;
