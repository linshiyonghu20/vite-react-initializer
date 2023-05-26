import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~types': path.resolve(__dirname, './types'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 改为后端服务器地址
        changeOrigin: true,
        rewrite: (url) => url.replace(/^\/api/, ''), // 根据后端地址修改url
      },
    },
  },
});
