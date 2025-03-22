import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  // root: 'src',
  build: {
    outDir: './build',
    sourcemap: true,
  },
  server: {
    // host: true,
    // open: true,
    // port: 9222,
  },
});
