import { expect, Locator, Page } from '@playwright/test';
// eslint-disable-next-line import/no-unresolved, @typescript-eslint/no-unused-vars
import { page } from '../hooks/world';

export class CartPage {
  checkout: Locator;
  page: Page;
  table: Locator;
  shippingInformation: Locator;
  placeOrderBtn: Locator;
  constructor(page: Page) {
    this.checkout = page.locator('text=Checkout');
    this.page = page;
    this.table = page.locator('div .cart');
    this.shippingInformation = page.locator(
      "div[class='payment__shipping'] div[class='payment__title']",
    );
    this.placeOrderBtn = page.locator('text=Place Order ');
  }

  async getProductLocator(productName: string) {
    return this.page.locator("h3:has-text('" + productName + "')");
  }

  async verifyProduct(productName: string) {
    await this.table.waitFor();
    const bool = (await this.getProductLocator(productName)).isVisible();
    expect(bool).toBeTruthy();
    console.log(this.getProductLocator(productName));
  }

  async checkOut() {
    await this.checkout.click();
    await this.page.waitForLoadState('networkidle');
  }

  async placeOrderPageConfirmation() {
    const shipping = await this.shippingInformation.textContent();
    console.log(shipping);
    // eslint-disable-next-line playwright/valid-expect
    expect(shipping === ' Shipping Information ');
  }
}
