<template>
  <div class="js-grid">
    <pre><code class="language-js prism-light">{{ dispCode }}</code></pre>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  code: {
    type: [String, Array],
    required: true,
  },
});

const dispCode = computed(() => {
  if (typeof props.code === 'string') {
    return props.code;
  } else {
    return props.code.join('\n');
  }
});
</script>

<style lang="scss">
.js-grid {
  background-color: var(--color-backdrop);
  padding: $space-card;
  box-shadow: var(--box-shadow-backdrop);
  border-radius: $corner-radius-lg;
  margin-bottom: $space-card;
  text-align: center;
  backdrop-filter: $filter-mica;

  pre {
    overflow-x: auto;
    margin: 0;
    background-color: var(--color-backdrop-wrapper);
    padding: 10px 16px;
    border-radius: $corner-radius-sm;
    line-height: 1.5;
  }
}
</style>
