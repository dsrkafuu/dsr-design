import 'normalize.css';
import './styles/global.scss';
import './styles/prism.scss';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import ScreenNotice from './ScreenNotice.vue';
import { geiScreenStatus } from './utils/screen';
// prismjs (cdn in production)
import Prism from 'prismjs';

const screenNotice = createApp(ScreenNotice);
const app = createApp(App).use(router).provide('$Prism', Prism);

if (geiScreenStatus().status) {
  app.mount('#root');
} else {
  screenNotice.mount('#root');
  window._IGNORE_NOTICE = () => {
    screenNotice.unmount();
    app.mount('#root');
  };
}
