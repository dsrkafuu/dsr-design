## CSS 变量

```scss
:root {
  --color-primary: #8aa2d3;
  --color-primary-active: #9db1da;
  --color-transparent-active: #f3f2f1;
  --color-success: #77ccb0;
  --color-success-active: #8ad3bb;
  --color-danger: #d38aa2;
  --color-danger-active: #da9db1;
  --color-body: #f2f2f2;
  --color-bg: #ffffff;
  --color-backdrop: rgba(255, 255, 255, 0.8);
  --color-wrapper: #f1f1f1;
  --color-border: #dadfe6;
  --color-font: #24292f;
  --color-font-inverse: #fdfdfd;
  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    --color-transparent-active: #585c61;
    --color-body: #2f3136;
    --color-bg: #474b51;
    --color-backdrop: rgba(77, 81, 88, 0.8);
    --color-wrapper: #34373d;
    --color-border: #34373d;
    --color-font: #e1e1e1;
    --color-font-inverse: #24292f;
    --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}
```

## SCSS 变量

```scss
$transition-duration: 100ms;
$corner-radius: 2px;
$bold-weight: 500;

$highlight-size: 2px;
$border-size: 2px;

$space-card: 22px;
$space-mobile: 16px;
$space-para: 15px;

$font-xl: 20px;
$font-lg: 18px;
$font-md: 15px;
$font-sm: 14px;
$font-xs: 12px;

$font-family-cjk: 'Noto Sans SC', 'Noto Sans JP';
$font-family-latin: Inter, -apple-system, BlinkMacSystemFont;
$font-family-body: $font-family-latin, $font-family-cjk, sans-serif;
$font-family-mono: 'Fira Code', $font-family-cjk, monospace;

$filter-blur: saturate(180%) blur(3px);
```

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
