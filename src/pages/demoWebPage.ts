import { type Page, expect } from '@playwright/test';

export class DemoWebPage {
  constructor(private page: Page) {}

  async openHomePage() {
    await this.page.goto('https://www.saucedemo.com/');
    await expect(this.page).toHaveTitle(/Swag Labs/i);
  }

  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async verifyInventoryPage() {
    await expect(this.page).toHaveURL(/\/inventory/);
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addFirstItemToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  }
}
