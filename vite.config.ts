import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'dashes',
      generateScopedName: '[local]__[hash:base64:2]',
    },
  },
  plugins: [svgr(), react()],
});