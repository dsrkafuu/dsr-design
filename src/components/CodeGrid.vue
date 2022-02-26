<template>
  <div class="js-grid">
    <pre><code class="language-js prism-light">{{ dispCode }}</code></pre>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

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
  background-color: var(--color-bg);
  padding: $space-card;
  box-shadow: var(--box-shadow);
  border-radius: $corner-radius;
  margin-bottom: $space-card;
  text-align: center;

  pre {
    overflow-x: auto;
    margin: 0;
    background-color: var(--color-wrapper);
    padding: 10px 16px;
    border-radius: $corner-radius;
    line-height: 1.5;
  }
}
</style>
