<template>
  <JSGrid code="import 'dsr-design/color'" />
  <div class="grids">
    <ColorGrid
      v-for="item of light"
      :key="item.name"
      :text="item.name"
      :code="item.code"
      :font="item.font"
      :mica="item.mica"
    />
  </div>
</template>

<script setup>
import JSGrid from '../components/CodeGrid.vue';
import ColorGrid from '../components/ColorGrid.vue';

const light = [
  { name: 'Mica 背景色', code: 'rgba(255, 255, 255, 0.8)', mica: true },
  { name: 'Mica 背景色 (高亮)', code: 'rgba(255, 255, 255, 0.65)', mica: true },
  { name: 'Mica 内背景色', code: 'rgba(255, 255, 255, 0.65)', mica: true },
  { name: 'Mica 边框色', code: '#bbbbbb' },
  { name: '主色', code: '#8aa2d3', font: '#fdfdfd' },
  { name: '主色 (高亮)', code: '#9db1da', font: '#fdfdfd' },
  { name: '成功色', code: '#77ccb0', font: '#fdfdfd' },
  { name: '成功色 (高亮)', code: '#8ad3bb', font: '#fdfdfd' },
  { name: '危险色', code: '#d38aa2', font: '#fdfdfd' },
  { name: '危险色 (高亮)', code: '#da9db1', font: '#fdfdfd' },
  { name: '透明色 (高亮)', code: '#f3f2f1' },
  { name: '主体色', code: '#f2f2f2' },
  { name: '背景色', code: '#ffffff' },
  { name: '内背景色', code: '#f1f1f1' },
  { name: '边框色', code: '#dadfe6' },
  { name: '字体色', code: '#24292f', font: '#fdfdfd' },
  { name: '字体反色', code: '#fdfdfd' },
];
</script>

<style scoped lang="scss">
.grids {
  border-radius: $corner-radius-lg;
}
</style>
