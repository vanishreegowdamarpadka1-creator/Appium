import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 120000,
  expect: {
    timeout: 20000,
  },
  fullyParallel: false,
  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
  outputDir: './test-results',
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 60000,
  },
  projects: [
    {
      name: 'android-chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        deviceScaleFactor: 2,
      },
    },
    {
      name: 'desktop-chrome',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
