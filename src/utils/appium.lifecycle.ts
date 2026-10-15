import { test as base } from '@playwright/test';
import { chromium } from '@playwright/test';
import { androidChromeCapabilities } from '../config/appium.capabilities';

export type MobileTestOptions = {
  appiumSession?: any;
};

export const test = base.extend<MobileTestOptions>({
  appiumSession: [async ({}, use) => {
    const isAppiumEnabled = process.env.RUN_APPIUM === 'true';

    if (!isAppiumEnabled) {
      await use(undefined);
      return;
    }

    const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
    const context = browser.contexts()[0] ?? await browser.newContext();
    const page = await context.newPage();

    await use({ browser, context, page });

    await page.close();
    await context.close();
    await browser.close();
  }, { scope: 'test' }],
});

export { expect } from '@playwright/test';
