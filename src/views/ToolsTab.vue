<template>
  <div class="tab">
    <pre><code class="language-js">{{ buildStyles }}</code></pre>
  </div>
</template>

<script setup>
import buildStyles from '../../scripts/buildStyles.mjs?raw';
</script>

<style scoped lang="scss">
.tab {
  padding: $space-card;
  border-radius: $corner-radius-lg;
  background-color: var(--color-backdrop);
  backdrop-filter: $filter-mica;
  box-shadow: var(--box-shadow);

  pre {
    overflow-x: auto;
    margin: 0;
    padding: 10px 16px;
    border-radius: $corner-radius-sm;
    line-height: 1.5;
    background-color: var(--color-backdrop-wrapper);
  }
}
</style>
