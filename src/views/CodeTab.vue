<template>
  <JSGrid code="import 'dsr-design/prism'" />
  <div class="light">
    <pre><code class="language-js">{{ prism }}</code></pre>
  </div>
  <div class="dark">
    <pre><code class="language-js prism-dark">{{ prism }}</code></pre>
  </div>
</template>

<script setup>
import JSGrid from '../components/CodeGrid.vue';
import prism from '../examples/prism.js?raw';
</script>

<style scoped lang="scss">
.light,
.dark {
  padding: $space-card;
  border-radius: $corner-radius;

  pre {
    overflow-x: auto;
    margin: 0;
    padding: 10px 16px;
    border-radius: $corner-radius;
    line-height: 1.5;
  }
}

.light {
  background-color: var(--color-bg);
  margin-bottom: $space-card;
  box-shadow: var(--box-shadow);

  pre {
    background-color: var(--color-wrapper);
  }
}

.dark {
  color: var(--dark-color-font);
  background-color: var(--dark-color-bg);
  box-shadow: var(--dark-box-shadow);

  pre {
    background-color: var(--dark-color-body);
  }
}
</style>
