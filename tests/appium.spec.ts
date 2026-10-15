import { test, expect } from '@playwright/test';

// Appium capability example for Android Chrome / iOS Safari
const capabilities = {
  'appium:platformName': 'Android',
  'appium:deviceName': 'Pixel_5',
  'appium:automationName': 'UiAutomator2',
  'browserName': 'Chrome',
  'goog:chromeOptions': {
    args: ['--disable-notifications'],
  },
  'appium:udid': 'emulator-5554',
  'appium:platformVersion': '14',
  'appium:newCommandTimeout': 600,
};

test.describe('Appium + Playwright mobile browser', () => {
  test('launch mobile Chrome and navigate', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
    await expect(page.locator('h1')).toContainText('Example Domain');
  });
});

// If you want to connect through Appium server explicitly, use:
// const driver = await remote({
//   hostname: '127.0.0.1',
//   port: 4723,
//   path: '/wd/hub',
//   capabilities,
// });
