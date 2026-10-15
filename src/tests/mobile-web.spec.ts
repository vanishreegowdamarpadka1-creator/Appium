import { test, expect } from '../utils/test';
import { DemoWebPage } from '../pages/demoWebPage';

const appiumUrl = 'http://127.0.0.1:4723';

test.describe('Mobile web automation with Appium lifecycle', () => {
  test('should login and add product to cart', async ({ page, appiumSession }, testInfo) => {
    if (!appiumSession.enabled) {
      test.skip(true, 'Appium server not enabled. Use RUN_APPIUM=true to run this test.');
    }

    await page.goto('https://www.saucedemo.com/');
    await page.screenshot({ path: `test-results/screenshots/${testInfo.project.name}-home.png`, fullPage: true });

    const demoPage = new DemoWebPage(page);
    await demoPage.login('standard_user', 'secret_sauce');
    await demoPage.verifyInventoryPage();
    await demoPage.addFirstItemToCart();

    await page.screenshot({ path: `test-results/screenshots/${testInfo.project.name}-cart.png`, fullPage: true });

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await testInfo.attach('appium-server-url', { body: appiumUrl, contentType: 'text/plain' });
  });
});
