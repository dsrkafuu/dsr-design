<template>
  <div class="tab">
    <div class="codes">
      <div class="row" v-for="font of fonts" :key="font.type">
        <span class="type">{{ font.type }}</span>
        <div class="code">
          <code>{{ font.code }}</code>
        </div>
      </div>
    </div>
    <div class="google">
      <span class="type">Google Fonts</span>
      <div class="code">
        <pre>{{ googleFonts }}</pre>
      </div>
    </div>
    <div class="example">
      <span class="type">字体预览</span>
      <div class="show">
        <p>Almost before we knew it, we had left the ground.</p>
        <p>人人生而自由，在尊严和权利上一律平等。</p>
        <p>さあ、始まるざますよ。行くでがんす。ふんがん～</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    };
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

.codes {
  .type {
    width: 120px;
  }

  .code {
    background-color: $color-body;
    padding: 2px 10px;
    border-radius: $border-radius;
  }
}

.google,
.example {
  .type {
    font-size: 16px;
    padding-left: 24px;
  }

  .code {
    font-size: 16px;
    padding: 24px;

    pre {
      overflow-x: auto;
      margin: 0;
      background-color: $color-body;
      padding: 10px 16px;
      border-radius: $border-radius;
      line-height: 1.5;
    }
  }

  .show {
    padding: 24px;
    font-size: 36px;

    p {
      margin-top: 0;
      margin-bottom: 16px;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
