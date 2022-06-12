# DSRDESIGN

![](https://img.shields.io/npm/v/dsr-design)
![](https://img.shields.io/npm/dm/dsr-design)
[![](https://img.shields.io/npm/l/dsr-design)](https://github.com/dsrkafuu/dsr-design/blob/main/LICENSE)

Design scheme & tools of all DSR projects.

## Usage

- Demo site: <https://design.dsrkafuu.net>
- NPM package: <https://www.npmjs.com/package/dsr-design>

```bash
pnpm add dsr-design
```

### SCSS

```scss
@import 'dsr-design/scss/variables';
@import 'dsr-design/scss/colors';
@import 'dsr-design/scss/resets';
@import 'dsr-design/scss/markdown';
@import 'dsr-design/scss/micadown';
@import 'dsr-design/scss/prism';
```

### CSS

```css
@import url('dsr-design/css/variables.css');
@import url('dsr-design/css/colors.css');
@import url('dsr-design/css/resets.css');
@import url('dsr-design/css/markdown.css');
@import url('dsr-design/css/micadown.css');
@import url('dsr-design/css/prism.css');
```

### Utils

```js
import { cloneDeep, mergeDeep, debounce, throttle } from 'dsr-design/utils';
```

## Environment Variables

```
VITE_BASE_URL=/
```

## Supported Browsers

All of my personal projects only supports **latest version** of Chrome, Edge, Firefox and Safari.

## LICENSE

The repo is released under the `Apache License 2.0`, for more information read the [LICENSE](https://github.com/dsrkafuu/dsr-design/blob/main/LICENSE).

**Copyright © 2021-present DSRKafuU (<https://dsrkafuu.net>)**
