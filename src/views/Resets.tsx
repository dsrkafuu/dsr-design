import styles from './Resets.module.scss';
import CodeGrid from '../components/CodeGrid';
import clsx from 'clsx';
import { For } from 'solid-js';

const fonts = [
  {
    type: 'CJK 字体',
    code: "'Noto Sans SC', 'Noto Sans JP', sans-serif",
  },
  {
    type: '拉丁字体',
    code: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  {
    type: '等宽字体',
    code: "'Fira Code', monospace",
  },
  {
    type: '字体大小',
    code: '10px, 12px, 14px, 15px, 18px, 20px, 24px',
  },
];
const gfonts = [
  '<link rel="preconnect" href="https://fonts.googleapis.com" />',
  '<link rel="preconnect" crossorigin href="https://fonts.gstatic.com" />',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500&family=Noto+Sans+SC:wght@400;500&family=Noto+Sans+JP:wght@400;500&family=Fira+Code:wght@400;500" />',
];
const miscs = [
  {
    type: '盒子模型',
    code: 'border-box',
    desc: '避免手动痛苦计算宽度',
  },
  {
    type: '过渡时长',
    code: 'color 100ms ease, width 300ms ease',
    desc: '长/短区分过渡时长',
  },
  {
    type: '圆角半径',
    code: '4px, 6px, 8px',
    desc: '多种半径',
  },
  {
    type: '粗体字重',
    code: '500',
    desc: '减轻粗体字的模糊不清问题',
  },
  {
    type: '高亮条宽度',
    code: '3px',
    desc: 'Mica 设计的高亮条',
  },
  {
    type: '页眉页脚',
    code: '56px, 64px',
    desc: '实心页眉透明页脚',
  },
  {
    type: '空格大小',
    code: '20px, 16px, 15px',
    desc: '基础卡片空格',
  },
];
const emojis = [
  {
    type: 'Emoji',
    code: 'https://github.com/twitter/twemoji',
  },
  {
    type: '脚本 CDN 地址',
    code: 'https://cdn.dsrkafuu.net/lib/twemoji.min.js',
  },
  {
    type: '资源 CDN 地址',
    code: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/<version>/',
  },
];

function Resets() {
  return (
    <div>
      <CodeGrid
        code={["import 'dsr-design/variables'", "import 'dsr-design/reset'"]}
      />

      <div class={styles.section}>
        <For each={fonts}>
          {(font) => (
            <div class={styles.row}>
              <span class={styles.type}>{font.type}</span>
              <code class={clsx(styles.code, 'language-css')}>{font.code}</code>
            </div>
          )}
        </For>
        <div class={styles.gfonts}>
          <span class={styles.type}>Google Fonts</span>
          <pre class={styles.code}>
            <code class='language-html'>{gfonts.join('\n')}</code>
          </pre>
        </div>
      </div>

      <div class={clsx(styles.section, styles.section_misc)}>
        <For each={miscs}>
          {(misc) => (
            <div class={styles.row}>
              <span class={styles.type}>{misc.type}</span>
              <code class={clsx(styles.code, 'language-css')}>{misc.code}</code>
              <span class={styles.desc}>{misc.desc}</span>
            </div>
          )}
        </For>
      </div>

      <div class={clsx(styles.section, styles.section_emoji)}>
        <For each={emojis}>
          {(e) => (
            <div class={styles.row}>
              <span class={styles.type}>{e.type}</span>
              <code class={clsx(styles.code, 'language-html')}>{e.code}</code>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default Resets;
