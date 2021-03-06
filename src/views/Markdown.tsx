import styles from './Markdown.module.scss';
import { onMount } from 'solid-js';
import CodeGrid from '../components/CodeGrid';
import article from '../examples/example.md?raw';

const mdit = window
  .markdownit({
    html: true,
    xHtmlOut: true,
    linkify: true,
  })
  .use(window.markdownitEmoji)
  .use(window.markdownitSup)
  .use(window.markdownitSub)
  .use(window.markdownitFootnote);
mdit.renderer.rules.emoji = (
  token: Array<{ content: string }>,
  idx: number
) => {
  return window.twemoji.parse(token[idx].content, {
    base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/',
    folder: 'svg',
    ext: '.svg',
  });
};
const html = mdit.render(article);

function Markdown() {
  onMount(() => {
    window.Prism.highlightAll();
  });

  return (
    <div>
      <CodeGrid code="import 'dsr-design/markdown'" />
      <div class={styles.section}>
        {/* eslint-disable-next-line solid/no-innerhtml */}
        <article class='micadown' innerHTML={html}></article>
      </div>
    </div>
  );
}

export default Markdown;
