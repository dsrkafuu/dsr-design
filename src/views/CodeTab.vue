<template>
  <JSGrid code="import 'dsr-design/prism'" />
  <div class="tab">
    <pre><code class="language-js">{{ prism }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import JSGrid from '../components/CodeGrid.vue';
import prism from '../examples/prism.js?raw';
</script>

<style scoped lang="scss">
.tab {
  padding: $space-card;
  border-radius: $corner-radius-lg;
  background-color: var(--color-backdrop);
  backdrop-filter: $filter-mica;
  box-shadow: var(--box-shadow-backdrop);

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
