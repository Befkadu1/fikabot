import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'node:path';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  server: {
    port: 8765,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
