import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@a': path.resolve(__dirname, 'src/assets'),
      '@c': path.resolve(__dirname, 'src/components'),
      '@p': path.resolve(__dirname, 'src/pages'),
      '@ser': path.resolve(__dirname, 'src/services'),
      '@s': path.resolve(__dirname, 'src/store'),
      '@t': path.resolve(__dirname, 'src/types'),
      '@u': path.resolve(__dirname, 'src/utils'),
    },
  },
});
