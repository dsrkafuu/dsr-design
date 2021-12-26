<template>
  <div class="tab">
    <pre><code class="language-js prism-light">{{ code }}</code></pre>
  </div>
</template>

<script>
import genIconIdx from '../utils/genIconIdx.mjs?raw';

export default {
  data() {
    return {
      code: genIconIdx,
    };
  },
  async mounted() {
    window.Prism.highlightAll();
  },
};
</script>

<style scoped lang="scss">
.tab {
  padding: $space-base;
  border-radius: $border-radius;
  background-color: $color-bg;
  margin-bottom: $space-base;
  box-shadow: $box-shadow;

  pre {
    overflow-x: auto;
    margin: 0;
    padding: 10px 16px;
    border-radius: $border-radius;
    line-height: 1.5;
    font-size: 16px;
    background-color: $color-body;
  }
}
</style>
