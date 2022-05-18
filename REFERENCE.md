## CSS 变量

```scss
@mixin dsr-design-colors-common {
  --color-primary: #8aa2d3;
  --color-primary-active: #9db1da;
  --color-success: #77ccb0;
  --color-success-active: #8ad3bb;
  --color-danger: #d38aa2;
  --color-danger-active: #da9db1;
}

@mixin dsr-design-colors-light {
  --color-bg: #fafafa;
  --color-bg-active: #f0f0f0;
  --color-backdrop: rgba(255, 255, 255, 0.8);
  --color-backdrop-active: rgba(255, 255, 255, 0.65);
  --color-backdrop-wrapper: rgba(255, 255, 255, 0.65);
  --color-backdrop-border: #bbbbbb;
  --color-body: #f2f2f2;
  --color-wrapper: #f1f1f1;
  --color-border: #dadfe6;
  --color-font: #24292f;
  --color-font-inverse: #fdfdfd;
  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  --box-shadow-backdrop: 0 8px 24px rgba(0, 0, 0, 0.1);
}

@mixin dsr-design-colors-dark {
  --color-bg: #474b51;
  --color-bg-active: #585c61;
  --color-backdrop: rgba(71, 75, 81, 0.9);
  --color-backdrop-active: rgba(255, 255, 255, 0.1);
  --color-backdrop-wrapper: rgba(255, 255, 255, 0.1);
  --color-backdrop-border: #bbbbbb;
  --color-body: #2f3136;
  --color-wrapper: #34373d;
  --color-border: #34373d;
  --color-font: #e1e1e1;
  --color-font-inverse: #24292f;
  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  --box-shadow-backdrop: 0 8px 24px rgba(0, 0, 0, 0.2);
}

:root {
  @include dsr-design-colors-common;
  @include dsr-design-colors-light;
  @media (prefers-color-scheme: dark) {
    @include dsr-design-colors-dark;
  }
}
body[data-theme='dark'] {
  @include dsr-design-colors-dark;
}
```

## SCSS 变量

```scss
$transition-fast: 100ms;
$transition-slow: 300ms;

$bold-weight: 500;

$highlight-size: 2px;
$border-size: 1px;
$active-size: 3px;
$active-radius: 2px;

$space-card: 22px;
$space-mobile: 16px;
$space-para: 15px;

$corner-radius-lg: 8px;
$corner-radius-md: 6px;
$corner-radius-sm: 4px;

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
$filter-mica: saturate(200%) blur(24px);
```
