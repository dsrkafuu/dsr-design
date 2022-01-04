<template>
  <JSGrid code="import 'dsr-design/markdown'" />
  <div class="tab">
    <article class="markdown" v-html="html"></article>
  </div>
</template>

<script>
import JSGrid from '../components/CodeGrid.vue';
import { twemoji } from '../global';
import example from '../examples/example.md?raw';
import markdownit from 'markdown-it';
import markdownitEmoji from 'markdown-it-emoji';
import markdownitSup from 'markdown-it-sup';
import markdownitSub from 'markdown-it-sup';
import markdownitFootnote from 'markdown-it-footnote';

const mdit = markdownit({
  html: true,
  xHtmlOut: true,
  linkify: true,
})
  .use(markdownitEmoji)
  .use(markdownitSup)
  .use(markdownitSub)
  .use(markdownitFootnote);

mdit.renderer.rules.emoji = (token, idx) => {
  return twemoji.parse(token[idx].content, {
    base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@13.1.0/assets/',
  });
};

export default {
  components: {
    JSGrid,
  },
  data() {
    return {
      html: '',
    };
  },
  mounted() {
    this.html = mdit.render(example);
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
