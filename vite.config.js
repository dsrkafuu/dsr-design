import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, './node_modules')],
        additionalData: `@import '@/styles/variables';`,
      },
    },
  },
  build: {
    target: 'es2020',
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      plugins: [visualizer()],
    },
  },
});
