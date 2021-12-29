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
        <a
          class="menu-item menu-item-right"
          href="https://github.com/dsrkafuu/dsr-design"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </nav>
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

<script>
import { RouterLink, RouterView } from 'vue-router';
import { routes } from './router';

export default {
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {};
  },
  computed: {
    /**
     * 需要在菜单中显示的路由
     */
    tabRoutes() {
      const ret = [];
      for (const route of routes) {
        if (route.name !== 'NotFound') {
          ret.push(route);
        }
      }
      return ret;
    },
    /**
     * 当前路由的路径
     */
    matchedPath() {
      const matched = this.$route.matched;
      if (matched.length > 0) {
        return matched[0].path;
      }
      return '';
    },
  },
};
</script>

<style scoped lang="scss">
$header-height: 48px;
$footer-height: 48px;
$responsive-width: 960px;

.header {
  width: 100%;
  min-width: $responsive-width;
  flex: 0 0 auto;
  text-align: center;
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);

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

      &:hover {
        color: var(--color-font);
        background-color: var(--color-transparent-active);
      }
    }

    h1 {
      margin: 0;
      display: inline-block;
      line-height: $header-height;
      font-size: $font-xl;
      font-weight: $bold-weight;
      height: 100%;
      transition: background-color $transition-duration ease;
    }
  }

  .menu {
    height: $header-height;

    &-item {
      padding: 0 $space-card;
      display: inline-block;
      height: $header-height;
      line-height: $header-height;
      text-decoration: none;
      transition: background-color $transition-duration ease;

      &:hover {
        color: var(--color-font);
        background-color: var(--color-transparent-active);
      }

      &-right {
        position: absolute;
        right: 0;
      }
    }

    .router-link-active {
      border-bottom: $highlight-size solid var(--color-primary);
    }
  }
}

.footer {
  font-size: $font-xs;
  width: 100%;
  min-width: $responsive-width;
  flex: 0 0 auto;
  height: $footer-height + $space-card;
  padding-bottom: $space-card;

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
  width: 960px;
  padding: 0 $space-card;
  margin: $space-card auto;
  min-height: calc(100vh - $header-height - $footer-height - $space-card * 3);
}
</style>
