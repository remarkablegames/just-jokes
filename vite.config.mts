import { resolve } from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react',
              test: /node_modules\/(react|react-dom)\//,
            },
          ],
        },
      },
    },
  },

  resolve: {
    alias: {
      src: resolve(import.meta.dirname, 'src'),
    },
  },

  plugins: [createHtmlPlugin(), react()],
});
