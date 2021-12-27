import 'normalize.css';
import './styles/global.scss';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App).use(router);

// cdn libs
const Prism = window.Prism;
const markdownit = window.markdownit().use(window.markdownitEmoji);
markdownit.renderer.rules.emoji = (token, idx) => {
  return window.twemoji.parse(token[idx].content, {
    base: window.TWEMOJI_BASE,
  });
};
app.provide('$Prism', Prism);
app.provide('$markdownit', markdownit);

app.mount('#root');
