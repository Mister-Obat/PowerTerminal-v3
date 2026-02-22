import { defineConfig } from 'vite';
import path from 'path';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';

export default defineConfig({
  plugins: [
    electron([
      {
        // Main process entry file of the Electron App.
        entry: 'src/main/main.js',
        onstart(options) {
          options.startup();
        },
        vite: {
          build: {
            outDir: 'dist-electron/main',
            rollupOptions: {
              external: ['node-pty'],
            },
          },
        },
      },
      {
        entry: 'src/main/preload.js',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete.
          options.reload();
        },
        vite: {
          build: {
            outDir: 'dist-electron/main',
          },
        },
      },
    ]),
    renderer(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5656,
  },
});
