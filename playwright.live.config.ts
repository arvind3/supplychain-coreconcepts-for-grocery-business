import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: 1,
  reporter: [['list'], ['html', {open: 'never'}]],
  use: {
    baseURL: 'https://arvind3.github.io/supplychain-coreconcepts-for-grocery-business/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium-live',
      use: {...devices['Desktop Chrome']},
    },
    {
      name: 'mobile-live',
      use: {...devices['Pixel 7']},
    },
  ],
});
