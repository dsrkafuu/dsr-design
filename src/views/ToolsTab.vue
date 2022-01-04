<template>
  <div class="tab">
    <pre><code class="language-js">{{ code }}</code></pre>
  </div>
</template>

<script>
import buildStyles from '../../scripts/buildStyles.mjs?raw';

export default {
  data() {
    return {
      code: buildStyles,
    };
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
