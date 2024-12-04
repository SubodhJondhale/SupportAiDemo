import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    target: 'esnext', // Ensures support for top-level await
  },
  build: {
    target: 'esnext', // Ensures the browser targets support top-level await
  },
});