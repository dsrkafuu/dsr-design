<template>
  <div class="tab">
    <pre><code class="language-js">{{ code }}</code></pre>
  </div>
</template>

<script>
import genIconIdx from '../../scripts/buildPackage.mjs?raw';

export default {
  inject: ['$Prism'],
  data() {
    return {
      code: genIconIdx,
    };
  },
  mounted() {
    this.$Prism.highlightAll();
  },
};
</script>

<style scoped lang="scss">
.tab {
  padding: $space-card;
  border-radius: $corner-radius;
  background-color: var(--color-bg);
  margin-bottom: $space-card;
  box-shadow: var(--box-shadow);

  pre {
    overflow-x: auto;
    margin: 0;
    padding: 10px 16px;
    border-radius: $corner-radius;
    line-height: 1.5;
    background-color: var(--color-body);
  }
}
</style>
