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
.header {
  width: 100%;
  min-width: 1044px;
  flex: 0 0 auto;
  text-align: center;
  background-color: $color-bg;
  box-shadow: $box-shadow;

  .nav {
    transform: translateX(-23px);
    height: $header-height;
    margin: 0 auto;
    width: 1044px;
    display: flex;
    align-items: center;
    padding-left: 1px;

    .title {
      text-decoration: none;
      padding: 0 $space-base;
      display: inline-block;

      &:hover {
        color: $color-font;
        background-color: $color-transparent-active;
      }
    }

    h1 {
      margin: 0;
      display: inline-block;
      line-height: $header-height;
      font-size: 22px;
      font-weight: $weight-bold;
      height: 100%;
      transition: background-color $transition-duration ease;
    }
  }

  .menu {
    height: $header-height;

    &-item {
      position: relative;
      font-size: 16px;
      padding: 0 $space-base;
      display: inline-block;
      height: $header-height;
      line-height: $header-height;
      text-decoration: none;
      transition: background-color $transition-duration ease;

      &:hover {
        color: $color-font;
        background-color: $color-transparent-active;
      }

      &-right {
        position: absolute;
        right: -47px;
      }
    }

    .router-link-active {
      border-bottom: $highlight-width solid $color-primary;
    }
  }
}

.footer {
  width: 100%;
  min-width: 1044px;
  flex: 0 0 auto;
  height: $footer-height + $space-base;
  padding-bottom: $space-base;

  &-inner {
    height: $footer-height;
    width: 1044px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: $color-primary;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.app {
  flex: 1 1 auto;
  width: 1044px;
  margin: $space-base auto;
  min-height: calc(100vh - $header-height - $footer-height - $space-base * 3);
}
</style>
