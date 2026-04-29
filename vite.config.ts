import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/invitation-letter/',
  assetsInclude: ['**/*.JPG'],
  plugins: [react()],
});
