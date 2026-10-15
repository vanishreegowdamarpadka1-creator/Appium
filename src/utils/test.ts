import { test as base, expect, type Page } from '@playwright/test';

export type AppiumSession = {
  enabled: boolean;
  serverUrl: string;
};

export const test = base.extend<{ appiumSession: AppiumSession }>({
  appiumSession: async ({}, use) => {
    const enabled = process.env.RUN_APPIUM === 'true';
    await use({
      enabled,
      serverUrl: 'http://127.0.0.1:4723',
    });
  },
});

export { expect };

export async function attachFailureScreenshot(page: Page, testInfo: any) {
  if (testInfo.status !== 'passed') {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('failure-screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  }
}
