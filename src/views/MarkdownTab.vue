<template>
  <JSGrid code="import 'dsr-design/markdown'" />
  <div class="tab">
    <article class="markdown" v-html="html"></article>
  </div>
</template>

<script>
import JSGrid from '../components/CodeGrid.vue';
import example from '../utils/example.md?raw';

export default {
  inject: ['$markdownit', '$Prism'],
  components: {
    JSGrid,
  },
  data() {
    return {
      html: '',
    };
  },
  mounted() {
    this.html = this.$markdownit.render(example);
    this.$Prism.highlightAll();
  },
};
</script>

<style scoped lang="scss">
.tab {
  padding: $space-card;
  border-radius: $corner-radius;
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
}
</style>
