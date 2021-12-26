<template>
  <JSGrid code="import 'dsr-design/styles/variables.scss'" />
  <div class="tab tab-font">
    <div class="codes">
      <div class="row" v-for="font of fonts" :key="font.type">
        <span class="type">{{ font.type }}</span>
        <div class="code">
          <code class="language-css prism-light">{{ font.code }}</code>
        </div>
      </div>
    </div>
    <div class="google">
      <span class="type">Google Fonts</span>
      <div class="code">
        <pre><code class="language-html prism-light">{{ googleFonts }}</code></pre>
      </div>
    </div>
  </div>
  <div class="tab tab-misc">
    <div class="row" v-for="misc of miscs" :key="misc.type">
      <span class="type">{{ misc.type }}</span>
      <div class="code">
        <code class="language-css prism-light">{{ misc.code }}</code>
      </div>
      <div class="desc">{{ misc.desc }}</div>
    </div>
  </div>
</template>

<script>
import JSGrid from '../components/JSGrid.vue';

export default {
  inject: ['$Prism'],
  components: {
    JSGrid,
  },
  data() {
    return {
      fonts: [
        {
          type: '全局字体',
          code: "Inter, -apple-system, BlinkMacSystemFont, 'Noto Sans SC', 'Noto Sans JP', sans-serif",
        },
        {
          type: '等宽字体',
          code: "'Fira Code', 'Noto Sans SC', 'Noto Sans JP', monospace",
        },
      ],
      googleFonts:
        '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
        '<link rel="preconnect" crossorigin href="https://fonts.gstatic.com">\n' +
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500&family=Noto+Sans+SC:wght@400;500&family=Noto+Sans+JP:wght@400;500&family=Fira+Code:wght@400;500">',
      miscs: [
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
      ],
    };
  },
  async mounted() {
    this.$Prism.highlightAll();
  },
};
</script>

<style scoped lang="scss">
.tab {
  background-color: $color-bg;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
}

.row {
  display: flex;
  padding: 22px 24px;
  padding-bottom: 0;
  font-size: 16px;
  line-height: 1.5;

  &:last-child {
    padding-bottom: 24px;
  }
}

.type {
  width: 120px;
}

.code {
  background-color: $color-body;
  padding: 2px 10px;
  border-radius: $border-radius;
}

.google {
  .type {
    font-size: 16px;
    padding-left: 24px;
  }

  .code {
    font-size: 16px;
    padding: 24px;
    background-color: transparent;

    pre {
      overflow-x: auto;
      margin: 0;
      background-color: $color-body;
      padding: 10px 16px;
      border-radius: $border-radius;
      line-height: 1.5;
    }
  }
}

.tab-misc {
  margin-top: 24px;

  .row:not(:last-child) {
    padding-bottom: 0;
  }

  .desc {
    flex: 1 1 auto;
    text-align: right;
  }
}
</style>
