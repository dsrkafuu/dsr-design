<template>
  <div class="js-grid">
    <pre><code class="language-js prism-light">{{ code }}</code></pre>
  </div>
</template>

<script>
export default {
  inject: ['$Prism'],
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    this.$Prism.highlightAll();
  },
};
</script>

<style lang="scss">
.js-grid {
  background-color: var(--color-bg);
  padding: 24px;
  box-shadow: var(--box-shadow);
  border-radius: $corner-radius;
  margin-bottom: 24px;
  font-size: 16px;
  text-align: center;

  pre {
    overflow-x: auto;
    margin: 0;
    background-color: var(--color-body);
    padding: 10px 16px;
    border-radius: $corner-radius;
    line-height: 1.5;
  }
}
</style>
