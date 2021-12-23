<template>
  <div class="tab">
    <div class="css">
      <pre>{{ colors }}</pre>
    </div>
    <div class="scss">
      <pre>{{ variables }}</pre>
    </div>
  </div>
</template>

<script>
// https://github.com/vitejs/vite/issues/5724
// https://github.com/vitejs/vite/pull/5796
// import colors from '../package/styles/colors.scss?raw';
// import variables from '../package/styles/variables.scss?raw';

export default {
  data() {
    return {
      colors: `:root {
  --color-primary: #8aa2d3;
  --color-primary-active: #9db1da;
  --color-transparent-active: #f0f1f3;
  --color-success: #77ccb0;
  --color-success-active: #8ad3bb;
  --color-danger: #d38aa2;
  --color-danger-active: #da9db1;
  --color-body: #f2f2f2;
  --color-bg: #ffffff;
  --color-border: #dadfe6;
  --color-font: #24292f;
  --color-font-inverse: #fdfdfd;
  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-transparent-active: #585c61;
    --color-body: #2f3136;
    --color-bg: #474b51;
    --color-border: #34373d;
    --color-font: #e1e1e1;
    --color-font-inverse: #24292f;
    --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}`,
      variables: `$font-cjk: 'Noto Sans SC', 'Noto Sans JP';
$font-en: Inter, -apple-system, BlinkMacSystemFont;
$font-mono: 'Fira Code', $font-cjk, monospace;
$font-body: $font-en, $font-cjk, sans-serif;

$transition-duration: 100ms;
$border-radius: 2px;
$weight-bold: 500;`,
    };
  },
};
</script>

<style scoped lang="scss">
.tab {
  background-color: $color-bg;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  padding: 24px;

  pre {
    overflow-x: auto;
    margin: 0;
    background-color: $color-body;
    padding: 10px 16px;
    border-radius: $border-radius;
    line-height: 1.5;
  }
}

.css {
  margin-bottom: 24px;
}
</style>
