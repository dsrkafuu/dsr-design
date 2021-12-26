<template>
  <JSGrid code="import 'dsr-design/color.css'" />
  <div class="light">
    <ColorGrid text="主色" code="#8aa2d3" activeCode="#9db1da" font="#fdfdfd" />
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
  <div class="dark">
    <ColorGrid text="主色" code="#8aa2d3" activeCode="#9db1da" font="#fdfdfd" />
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
</template>

<script>
import JSGrid from '../components/CodeGrid.vue';
import ColorGrid from '../components/ColorGrid.vue';

export default {
  components: {
    JSGrid,
    ColorGrid,
  },
};
</script>

<style scoped lang="scss">
.light,
.dark {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: $space-base;
  padding: $space-base;
  border-radius: $border-radius;
}

.light {
  background-color: $color-bg;
  margin-bottom: $space-base;
  box-shadow: $box-shadow;
}

.dark {
  background-color: $dark-color-bg;
  box-shadow: $dark-box-shadow;
}
</style>
