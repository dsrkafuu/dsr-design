/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */

// vite
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'markdown-it' {
  const src: any;
  export default src;
}
declare module 'markdown-it-emoji' {
  const src: any;
  export default src;
}
declare module 'markdown-it-sup' {
  const src: any;
  export default src;
}
declare module 'markdown-it-sub' {
  const src: any;
  export default src;
}
declare module 'markdown-it-footnote' {
  const src: any;
  export default src;
}
