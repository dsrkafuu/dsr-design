<template>
  <JSGrid code="import 'dsr-design/color'" />
  <div class="grids">
    <ColorGrid
      v-for="item of colors"
      :key="item.name"
      :text="item.name"
      :code="item.code"
      :font="item.font"
      :mica="item.mica"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import JSGrid from '../components/CodeGrid.vue';
import ColorGrid from '../components/ColorGrid.vue';

interface Color {
  name: string;
  code: string;
  font?: string;
  mica?: boolean;
}

const commons: Color[] = [
  { name: '主色', code: '#8aa2d3', font: '#fdfdfd' },
  { name: '主色 (高亮)', code: '#9db1da', font: '#fdfdfd' },
  { name: '成功色', code: '#77ccb0', font: '#fdfdfd' },
  { name: '成功色 (高亮)', code: '#8ad3bb', font: '#fdfdfd' },
  { name: '危险色', code: '#d38aa2', font: '#fdfdfd' },
  { name: '危险色 (高亮)', code: '#da9db1', font: '#fdfdfd' },
];
const light: Color[] = [
  ...commons,
  { name: '背景色', code: '#fafafa' },
  { name: '背景色 (高亮)', code: '#f0f0f0' },
  { name: 'Mica 背景色', code: 'rgba(255, 255, 255, 0.8)', mica: true },
  { name: 'Mica 背景色 (高亮)', code: 'rgba(255, 255, 255, 0.65)', mica: true },
  { name: 'Mica 内背景色', code: 'rgba(255, 255, 255, 0.65)', mica: true },
  { name: 'Mica 边框色', code: '#bbbbbb' },
  { name: '主体色', code: '#f2f2f2' },
  { name: '内背景色', code: '#f1f1f1' },
  { name: '边框色', code: '#dadfe6' },
  { name: '字体色', code: '#24292f', font: '#fdfdfd' },
  { name: '字体反色', code: '#fdfdfd' },
];
const dark: Color[] = [
  ...commons,
  { name: '背景色', code: '#474b51' },
  { name: '背景色 (高亮)', code: '#585c61' },
  { name: 'Mica 背景色', code: 'rgba(71, 75, 81, 0.9)', mica: true },
  {
    name: 'Mica 背景色 (高亮)',
    code: 'rgba(255, 255, 255, 0.1)',
    font: '#fdfdfd',
    mica: true,
  },
  {
    name: 'Mica 内背景色',
    code: 'rgba(255, 255, 255, 0.1)',
    font: '#fdfdfd',
    mica: true,
  },
  { name: 'Mica 边框色', code: '#bbbbbb', font: '#fdfdfd' },
  { name: '主体色', code: '#2f3136' },
  { name: '内背景色', code: '#34373d' },
  { name: '边框色', code: '#34373d' },
  { name: '字体色', code: '#e1e1e1', font: '#24292f' },
  { name: '字体反色', code: '#24292f' },
];

const theme = ref('light');
// 监听 DOM 变化
if (MutationObserver) {
  const observer = new MutationObserver(() => {
    if (document.body.getAttribute('data-theme') === 'dark') {
      theme.value = 'dark';
    } else {
      theme.value = 'light';
    }
  });
  observer.observe(document.body, { attributes: true });
}
// 监听浏览器设置变化
if (window.matchMedia) {
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  query.matches && (theme.value = 'dark');
  query.addEventListener('change', () => {
    if (document.body.hasAttribute('data-theme')) {
      document.body.removeAttribute('data-theme');
    }
  });
}
const colors = computed(() => {
  return theme.value === 'light' ? light : dark;
});
</script>

<style scoped lang="scss">
.grids {
  border-radius: $corner-radius-lg;
}
</style>
