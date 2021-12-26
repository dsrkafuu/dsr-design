<template>
  <JSGrid code="import 'dsr-design/styles/prism.scss'" />
  <div class="light">
    <pre><code class="language-js prism-light">{{ code }}</code></pre>
  </div>
  <div class="dark">
    <pre><code class="language-js prism-dark">{{ code }}</code></pre>
  </div>
</template>

<script>
import JSGrid from '../components/JSGrid.vue';

export default {
  components: {
    JSGrid,
  },
  data() {
    return {
      code: `/// <reference lib="WebWorker"/>
var _self =
  typeof window !== 'undefined'
    ? window // if in browser
    : typeof WorkerGlobalScope !== 'undefined' &&
      self instanceof WorkerGlobalScope
    ? self // if in worker
    : {}; // if in node js
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * @author Lea Verou <https://lea.verou.me>
 */
var Prism = function (_self) {
  // Private helper vars
  var lang = /(?:^|\\s)lang(?:uage)?-([\\w-]+)(?=\\s|$)/i;
  var uniqueId = 0;
  // The grammar object for plaintext
  var plainTextGrammar = {};
  var encode = function (tokens) {
    if (tokens instanceof Token) {
      return new Token(tokens.type, encode(tokens.content), tokens.alias);
    } else if (Array.isArray(tokens)) {
      return tokens.map(encode);
    } else {
      return tokens
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/\\u00a0/g, ' ');
    }
  };
};`,
    };
  },
  async mounted() {
    window.Prism.highlightAll();
  },
};
</script>

<style scoped lang="scss">
.light,
.dark {
  padding: 24px;
  border-radius: $border-radius;

  pre {
    overflow-x: auto;
    margin: 0;
    padding: 10px 16px;
    border-radius: $border-radius;
    line-height: 1.5;
  }
}

.light {
  background-color: $color-bg;
  margin-bottom: 24px;
  box-shadow: $box-shadow;

  pre {
    background-color: $color-body;
  }
}

.dark {
  color: $dark-color-font;
  background-color: $dark-color-bg;
  box-shadow: $dark-box-shadow;

  pre {
    background-color: $dark-color-body;
  }
}
</style>
