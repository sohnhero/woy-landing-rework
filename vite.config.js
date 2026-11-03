import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Static images/fonts live in public/assets; keep bundled JS/CSS separate.
  build: { assetsDir: 'static' },
});

