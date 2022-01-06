/// <reference lib="WebWorker"/>
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
    console.log(lang, uniqueId, plainTextGrammar);
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
};
