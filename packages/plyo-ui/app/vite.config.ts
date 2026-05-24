import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  envDir: path.resolve(import.meta.dirname, '../../..'),
  server: {
    port: 5173,
    strictPort: false
  }
});
