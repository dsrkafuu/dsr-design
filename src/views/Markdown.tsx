import styles from './Markdown.module.scss';
import markdownit from 'markdown-it';
import markdownitEmoji from 'markdown-it-emoji';
import markdownitSup from 'markdown-it-sup';
import markdownitSub from 'markdown-it-sub';
import markdownitFootnote from 'markdown-it-footnote';
import CodeGrid from '../components/CodeGrid';
import article from '../examples/example.md?raw';

const mdit = markdownit({
  html: true,
  xHtmlOut: true,
  linkify: true,
})
  .use(markdownitEmoji)
  .use(markdownitSup)
  .use(markdownitSub)
  .use(markdownitFootnote);
mdit.renderer.rules.emoji = (
  token: Array<{ content: string }>,
  idx: number
) => {
  return window.twemoji.parse(token[idx].content, {
    folder: 'svg',
    ext: '.svg',
  });
};
const html = mdit.render(article);

function Markdown() {
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
