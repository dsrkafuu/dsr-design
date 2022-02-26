<template>
  <div class="tab">
    <article class="markdown" v-html="html"></article>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import example from '../../REFERENCE.md?raw';
import markdownit from 'markdown-it';

const mdit = markdownit({
  html: true,
  xHtmlOut: true,
  linkify: true,
});

const html = ref('');
onMounted(() => {
  html.value = mdit.render(example);
});
</script>

<style scoped lang="scss">
.tab {
  padding: $space-card;
  border-radius: $corner-radius;
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
}
</style>
