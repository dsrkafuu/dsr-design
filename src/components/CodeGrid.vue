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
  background-color: $color-bg;
  padding: 24px;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  margin-bottom: 24px;
  font-size: 16px;
  text-align: center;

  pre {
    overflow-x: auto;
    margin: 0;
    background-color: $color-body;
    padding: 10px 16px;
    border-radius: $border-radius;
    line-height: 1.5;
  }
}
</style>
