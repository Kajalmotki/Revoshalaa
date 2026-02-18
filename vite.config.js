import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import liveSessionApi from './plugins/liveSessionApi.js';

export default defineConfig({
  plugins: [react(), basicSsl(), liveSessionApi()],
  server: {
    host: true,
    port: 5174,
    https: true,
  },
});
