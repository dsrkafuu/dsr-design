import 'normalize.css';
import './styles/global.scss';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App).use(router);

// cdn libs
const Prism = window.Prism;
const markdownit = window
  .markdownit({
    html: true,
    xHtmlOut: true,
    linkify: true,
  })
  .use(window.markdownitEmoji)
  .use(window.markdownitSup)
  .use(window.markdownitSub)
  .use(window.markdownitFootnote);
markdownit.renderer.rules.emoji = (token, idx) => {
  return window.twemoji.parse(token[idx].content, {
    base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@13.1.0/assets/',
  });
};
app.provide('$Prism', Prism);
app.provide('$markdownit', markdownit);

app.mount('#root');
