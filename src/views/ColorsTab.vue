<template>
  <div class="colors-tab">
    <div class="color-tabs-light">
      <ColorGrid
        text="主色"
        code="#8aa2d3"
        activeCode="#9db1da"
        font="#fdfdfd"
      />
      <ColorGrid text="透明色" code="transparent" activeCode="#f0f1f3" />
      <ColorGrid
        text="成功色"
        code="#77ccb0"
        activeCode="#8ad3bb"
        font="#fdfdfd"
      />
      <ColorGrid
        text="危险色"
        code="#d38aa2"
        activeCode="#da9db1"
        font="#fdfdfd"
      />
      <ColorGrid text="主体色" code="#f2f2f2" />
      <ColorGrid text="背景色" code="#ffffff" />
      <ColorGrid text="边框色" code="#dadfe6" />
      <ColorGrid text="字体色" code="#24292f" font="#fdfdfd" />
      <ColorGrid text="字体反色" code="#fdfdfd" />
    </div>
    <div class="color-tabs-dark">
      <ColorGrid
        text="主色"
        code="#8aa2d3"
        activeCode="#9db1da"
        font="#fdfdfd"
      />
      <ColorGrid
        text="透明色"
        code="transparent"
        activeCode="#585c61"
        font="#e1e1e1"
      />
      <ColorGrid
        text="成功色"
        code="#77ccb0"
        activeCode="#8ad3bb"
        font="#fdfdfd"
      />
      <ColorGrid
        text="危险色"
        code="#d38aa2"
        activeCode="#da9db1"
        font="#fdfdfd"
      />
      <ColorGrid text="主体色" code="#2f3136" font="#e1e1e1" />
      <ColorGrid text="背景色" code="#474b51" font="#e1e1e1" />
      <ColorGrid text="边框色" code="#34373d" font="#e1e1e1" />
      <ColorGrid text="字体色" code="#e1e1e1" font="#24292f" />
      <ColorGrid text="字体反色" code="#24292f" font="#e1e1e1" />
    </div>
  </div>
</template>

<script>
import ColorGrid from '../components/ColorGrid.vue';

export default {
  components: {
    ColorGrid,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleLoadingClick() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
};
</script>

<style scoped lang="scss">
.color-tabs-light,
.color-tabs-dark {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;
  padding: 24px;
  border-radius: $border-radius;
}

.color-tabs-light {
  background-color: $color-bg;
  margin-bottom: 24px;
  box-shadow: $box-shadow;
}

.color-tabs-dark {
  background-color: $dark-color-bg;
  box-shadow: $dark-box-shadow;
}
</style>
