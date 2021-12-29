<template>
  <div class="js-grid">
    <pre><code class="language-js prism-light">{{ dispCode }}</code></pre>
  </div>
</template>

<script>
export default {
  inject: ['$Prism'],
  props: {
    code: {
      type: [String, Array],
      required: true,
    },
  },
  computed: {
    dispCode() {
      if (typeof this.code === 'string') {
        return this.code;
      } else {
        return this.code.join('\n');
      }
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
