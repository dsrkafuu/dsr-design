import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import externalGlobals from 'rollup-plugin-external-globals';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`,
      },
    },
  },
  build: {
    rollupOptions: {
      // external: ['prismjs'],
      plugins: [
        // fix rollup unspporting cjs externals
        externalGlobals({
          prismjs: 'Prism',
        }),
      ],
    },
  },
});
