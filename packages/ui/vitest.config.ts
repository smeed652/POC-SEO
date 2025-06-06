import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: [
      '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ],
    exclude: [
      '**/*.stories.*',
      'node_modules',
      'dist',
      '.next',
      '.vercel',
      '.output',
      'coverage',
    ],
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
});
