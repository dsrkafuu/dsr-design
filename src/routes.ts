import { lazy, createMemo } from 'solid-js';
import { useLocation } from 'solid-app-router';
import minimatch from 'minimatch';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./views/Resets')),
    meta: {
      name: '重置',
    },
  },
  {
    path: '/colors',
    component: lazy(() => import('./views/Colors')),
    meta: {
      name: '色彩',
    },
  },
  {
    path: '/code',
    component: lazy(() => import('./views/Code')),
    meta: {
      name: '代码',
    },
  },
  {
    path: '/markdown',
    component: lazy(() => import('./views/Markdown')),
    meta: {
      name: '文章',
    },
  },
  {
    path: '/*',
    component: lazy(() => import('./views/Colors')),
    meta: {
      name: '404 Not Found',
      hide: true,
    },
  },
];

export function useRoute() {
  const location = useLocation();

  const matched = createMemo(() => {
    const route = routes.find((route) =>
      minimatch(location.pathname, route.path)
    );
    return route || null;
  });
  return matched;
}

export default routes;
