## 加载条

```js
import { createRouter } from 'vue-router';
import { LoadingBar } from 'dsr-design';

const router = createRouter();
const loadingBar = new LoadingBar();

router.beforeEach((to, from) => {
  to.path !== from.path && loadingBar.start();
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    to.path !== from.path && loadingBar.end();
    // syntax highlight after route mounted
    nextTick(() => Prism.highlightAll());
  }
});
```
