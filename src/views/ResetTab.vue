<template>
  <JSGrid :code="codes" />
  <div class="tab tab-font">
    <div class="codes">
      <div class="row" v-for="font of fonts" :key="font.type">
        <span class="type">{{ font.type }}</span>
        <div class="code">
          <code class="language-css">{{ font.code }}</code>
        </div>
      </div>
    </div>
    <div class="google">
      <span class="type">Google Fonts</span>
      <div class="code">
        <pre><code class="language-html">{{ googleFonts }}</code></pre>
      </div>
    </div>
  </div>
  <div class="tab tab-misc">
    <div class="row" v-for="misc of miscs" :key="misc.type">
      <span class="type">{{ misc.type }}</span>
      <div class="code">
        <code class="language-css">{{ misc.code }}</code>
      </div>
      <div class="desc">{{ misc.desc }}</div>
    </div>
  </div>
  <div class="tab tab-emoji">
    <div class="row" v-for="emoji of emojis" :key="emoji.type">
      <span class="type">{{ emoji.type }}</span>
      <div class="code" v-if="emoji.code">
        <code class="language-html">{{ emoji.code }}</code>
      </div>
    </div>
  </div>
</template>

<script setup>
import JSGrid from '../components/CodeGrid.vue';

const codes = ["import 'dsr-design/variables'", "import 'dsr-design/reset'"];
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
const googleFonts =
  '<link rel="preconnect" href="https://fonts.googleapis.com" />\n' +
  '<link rel="preconnect" crossorigin href="https://fonts.gstatic.com" />\n' +
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500&family=Noto+Sans+SC:wght@400;500&family=Noto+Sans+JP:wght@400;500&family=Fira+Code:wght@400;500" />';
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
    code: 'https://twemoji.maxcdn.com/v/14.0.2/twemoji.min.js',
  },
];
</script>

<style scoped lang="scss">
.tab {
  background-color: var(--color-backdrop);
  backdrop-filter: $filter-mica;
  box-shadow: var(--box-shadow);
  border-radius: $corner-radius-lg;
}

.row {
  display: flex;
  padding: $space-card;
  padding-bottom: 0;
  line-height: 1.5;
  align-items: center;

  &:last-child {
    padding-bottom: $space-card;
  }
}

.type {
  width: 140px;
}

code {
  background-color: var(--color-backdrop-wrapper);
  padding: 2px 8px;
  border-radius: $corner-radius-sm;
  font-size: $font-sm;
}

pre code {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
}

.google {
  .type {
    padding-left: $space-card;
  }

  .code {
    padding: $space-card;
    background-color: transparent;

    pre {
      overflow-x: auto;
      margin: 0;
      background-color: var(--color-backdrop-wrapper);
      padding: 12px 15px;
      border-radius: $corner-radius-sm;
      line-height: 1.5;
    }
  }
}

.tab-misc,
.tab-emoji {
  margin-top: $space-card;

  .row:not(:last-child) {
    padding-bottom: 0;
  }

  .desc {
    flex: 1 1 auto;
    text-align: right;
  }
}
</style>
