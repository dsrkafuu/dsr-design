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
      <div class="code">
        <code>{{ emoji.code }}</code>
      </div>
    </div>
  </div>
</template>

<script>
import JSGrid from '../components/CodeGrid.vue';

export default {
  inject: ['$Prism'],
  components: {
    JSGrid,
  },
  data() {
    return {
      codes: ["import 'dsr-design/variables'", "import 'dsr-design/reset'"],
      fonts: [
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
      ],
      googleFonts:
        '<link rel="preconnect" href="https://fonts.googleapis.com" />\n' +
        '<link rel="preconnect" crossorigin href="https://fonts.gstatic.com" />\n' +
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500&family=Noto+Sans+SC:wght@400;500&family=Noto+Sans+JP:wght@400;500&family=Fira+Code:wght@400;500" />',
      miscs: [
        {
          type: '盒子模型',
          code: 'box-sizing: border-box;',
          desc: '避免手动痛苦计算宽度',
        },
        {
          type: '过渡时长',
          code: 'transition: all 100ms ease;',
          desc: '向微软学习的短过渡时长',
        },
        {
          type: '圆角半径',
          code: 'border-radius: 2px;',
          desc: '更好控制的小半径',
        },
        {
          type: '粗体字重',
          code: 'font-weight: 500;',
          desc: '减轻粗体字的模糊不清问题',
        },
        {
          type: '高亮条宽度',
          code: 'border-bottom: 2px solid var(--color-primary);',
          desc: '激活效果的链接和菜单',
        },
        {
          type: '页眉页脚',
          code: 'height: 60px; height: 48px;',
          desc: '实心页眉透明页脚',
        },
        {
          type: '空格大小',
          code: 'padding: 20px;',
          desc: '基础卡片空格',
        },
      ],
      emojis: [
        {
          type: '脚本 CDN 地址',
          code: 'https://cdn.jsdelivr.net/npm/twemoji@13.1.0/dist/twemoji.min.js',
        },
        {
          type: '资源 Base 路径',
          code: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@13.1.0/assets/',
        },
      ],
    };
  },
  mounted() {
    this.$Prism.highlightAll();
  },
};
</script>

<style scoped lang="scss">
.tab {
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
  border-radius: $corner-radius;
}

.row {
  display: flex;
  padding: $space-card;
  padding-bottom: 0;
  line-height: 1.5;

  &:last-child {
    padding-bottom: $space-card;
  }
}

.type {
  width: 140px;
}

.code {
  background-color: var(--color-wrapper);
  padding: 2px 6px;
  border-radius: $corner-radius;
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
      background-color: var(--color-wrapper);
      padding: 12px 15px;
      border-radius: $corner-radius;
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
