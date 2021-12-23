<template>
  <div class="header">
    <div class="nav">
      <h1>DSRDESIGN</h1>
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
    </div>
  </div>
  <div class="app">
    <RouterView />
  </div>
  <div class="footer">
    Copyright &copy; 2021-{{ new Date().getFullYear() }}
    <a href="https://dsrkafuu.net/" target="_blank" rel="noopener">DSRKafuU</a>
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
    height: 48px;
    margin: 0 auto;
    width: 1044px;
    display: flex;
    align-items: center;
    user-select: none;

    h1 {
      line-height: 48px;
      margin: 0;
      font-size: 20px;
      font-weight: $weight-bold;
      height: 100%;
      margin-right: 24px;
    }
  }

  .menu {
    height: 48px;

    &-item {
      font-size: 16px;
      padding: 0 20px;
      display: inline-block;
      height: 48px;
      line-height: 48px;
      text-decoration: none;
      transition: background-color $transition-duration ease;

      &:hover {
        color: $color-font;
        background-color: $color-transparent-active;
      }
    }

    .router-link-active {
      border-bottom: 2px solid $color-primary;
    }
  }
}

.footer {
  width: 100%;
  min-width: 1044px;
  flex: 0 0 auto;
  text-align: center;
  padding: 28px 0;
  background-color: $color-bg;
  box-shadow: $box-shadow;
  user-select: none;
  height: 72px;
}

.app {
  flex: 1 1 auto;
  width: 1044px;
  margin: 24px auto;
  min-height: calc(100vh - 48px - 72px - 24px * 2);
}
</style>
