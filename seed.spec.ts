import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await page.goto('https://example.com');
    console.log('Seed test');
  }); 
});
