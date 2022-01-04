import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { LoadingBar } from './package/lib';
import { Prism } from './global';

const ColorsTab = () => import('./views/ColorsTab.vue');
const ResetTab = () => import('./views/ResetTab.vue');
const CodeTab = () => import('./views/CodeTab.vue');
const ToolsTab = () => import('./views/ToolsTab.vue');
const MarkdownTab = () => import('./views/MarkdownTab.vue');
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

const loadingBar = new LoadingBar();

router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    loadingBar.start();
  }
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    if (to.path !== from.path) {
      loadingBar.end();
    }
    // highlight after route mounted
    nextTick(() => {
      Prism.highlightAll();
    });
  }
});

export default router;
