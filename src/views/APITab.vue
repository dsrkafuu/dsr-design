<template>
  <div class="tab">
    <article class="micadown" v-html="html"></article>
  </div>
</template>

<script setup lang="ts">
import example from '../../REFERENCE.md?raw';
import markdownit from 'markdown-it';

const mdit = markdownit({
  html: true,
  xHtmlOut: true,
  linkify: true,
});

const html = mdit.render(example);
</script>

<style scoped lang="scss">
.tab {
  padding: $space-card;
  border-radius: $corner-radius-lg;
  background-color: var(--color-backdrop);
  backdrop-filter: $filter-mica;
  box-shadow: var(--box-shadow-backdrop);
}
</style>
