<template>
  <div class="header">
    <div class="nav">
      <RouterLink class="title" :to="tabRoutes[0].path">
        <h1>DSRDESIGN</h1>
      </RouterLink>
      <nav class="menu">
        <RouterLink
          class="menu-item"
          v-for="route of tabRoutes"
          :to="route.path"
          :key="route.path"
        >
          {{ route.meta.name }}
        </RouterLink>
      </nav>
      <div class="menu menu-right">
        <div class="menu-item menu-item-icon" @click="handleSwitchTheme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1.2em"
            height="1.2em"
            fill="currentColor"
          >
            <path
              d="M504 256c0 137-111 248-248 248V8c137 0 248 111 248 248z"
              style="opacity: 0.4"
            />
            <path
              d="M256 8v496C119 504 8 393 8 256S119 8 256 8z"
              style="opacity: 0.8"
            />
          </svg>
        </div>
        <a
          class="menu-item"
          href="https://github.com/dsrkafuu/dsr-design"
          target="_blank"
          rel="noopener"
        >
          BLOG
        </a>
        <a
          class="menu-item"
          href="https://blog.dsrkafuu.net/"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
  <div class="app">
    <RouterView />
  </div>
  <div class="footer">
    <div class="footer-inner">
      <div class="footer-left">
        Copyright &copy; 2021-{{ new Date().getFullYear() }} |
        <a href="https://dsrkafuu.net/" target="_blank" rel="noopener"
          >DSRKafuU</a
        >
      </div>
      <div class="footer-right">
        <a
          href="https://github.com/dsrkafuu/dsr-design"
          target="_blank"
          rel="noopener"
          >DSRDESIGN</a
        >
        | Apache-2.0
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { routes } from './router';

// 需要在菜单中显示的路由
const tabRoutes = computed(() => {
  const ret = [];
  for (const route of routes) {
    if (route.name !== 'NotFound') {
      ret.push(route);
    }
  }
  return ret;
});

// 切换主题
const handleSwitchTheme = () => {
  const theme = document.body.getAttribute('data-theme');
  if (theme && theme === 'dark') {
    document.body.removeAttribute('data-theme');
  } else {
    document.body.setAttribute('data-theme', 'dark');
  }
};
</script>

<style scoped lang="scss">
$header-height: 56px;
$footer-height: 64px;
$responsive-width: 160px * 5 + 22px * 6 + 22px * 2;

.header {
  width: 100%;
  min-width: $responsive-width;
  flex: 0 0 auto;
  text-align: center;
  background-color: var(--color-backdrop);
  backdrop-filter: $filter-mica;
  box-shadow: var(--box-shadow-backdrop);
  position: sticky;
  top: 0;
  z-index: 99;
  flex: 0 0 auto;
  user-select: none;

  .nav {
    height: $header-height;
    margin: 0 auto;
    width: $responsive-width;
    display: flex;
    align-items: center;
    position: relative;

    .title {
      text-decoration: none;
      padding: 0 $space-card;
      display: inline-block;
      margin: 5px 0;
      border-radius: $corner-radius-sm;

      &:hover {
        color: var(--color-font);
        background-color: var(--color-backdrop-active);
      }
    }

    h1 {
      margin: 0;
      display: inline-block;
      height: $header-height - 10px;
      line-height: $header-height - 10px;
      font-size: $font-xl;
      font-weight: $bold-weight;
      height: 100%;
      transition: background-color $transition-fast ease;
    }
  }

  .menu {
    height: $header-height;
    padding: 5px;
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &-right {
      flex: 0 0 auto;
    }

    &-item {
      cursor: pointer;
      padding: 0 16px;
      display: inline-block;
      height: $header-height - 10px;
      line-height: $header-height - 10px;
      text-decoration: none;
      transition: background-color $transition-fast ease;
      border-radius: $corner-radius-sm;
      position: relative;

      &:hover {
        color: var(--color-font);
        background-color: var(--color-backdrop-active);
      }

      &:not(:first-child) {
        margin-left: 5px;
      }

      &-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: var(--color-font);
      }
    }

    .router-link-active {
      background-color: var(--color-backdrop-active);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 24px;
        left: 50%;
        transform: translateX(-50%);
        height: $active-size;
        border-radius: $active-radius;
        background-color: var(--color-primary);
      }
    }
  }
}

.footer {
  font-size: $font-xs;
  width: 100%;
  min-width: $responsive-width;
  flex: 0 0 auto;
  height: $footer-height;
  background-color: var(--color-backdrop);
  backdrop-filter: $filter-mica;
  box-shadow: var(--box-shadow-backdrop);
  flex: 0 0 auto;

  &-inner {
    height: $footer-height;
    width: $responsive-width;
    margin: 0 auto;
    padding: 0 $space-card;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.app {
  flex: 1 1 auto;
  width: $responsive-width;
  padding: 0 $space-card;
  margin: $space-card auto;
}
</style>
