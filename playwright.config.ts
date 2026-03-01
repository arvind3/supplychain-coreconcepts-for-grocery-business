import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: 1,
  reporter: [['list'], ['html', {open: 'never'}]],
  use: {
    baseURL: 'http://127.0.0.1:3000/supplychain-coreconcepts-for-grocery-business',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run serve',
    port: 3000,
    reuseExistingServer: true,
    timeout: 120000,
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
    {
      name: 'mobile-chrome',
      use: {...devices['Pixel 7']},
    },
  ],
});
