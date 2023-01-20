import { expect, Locator, Page } from '@playwright/test';
// eslint-disable-next-line import/no-unresolved
import { page } from '../hooks/world';

export class DashboardPage {
  product: Locator;
  productText: Locator;
  addCart: string;
  cart: Locator;
  signInbutton: Locator;
  email: Locator;
  password: Locator;
  page: Page;
  productQuantity: Locator;
  //cartPageVerify:Locator;

  constructor(page: Page) {
    // i can write here public page:Page
    this.page = page;
    this.product = page.locator('div .card-body');
    this.productText = page.locator('div .card-body b');
    this.addCart = '.w-10';
    this.cart = page.locator("[routerlink='/dashboard/cart']");
    this.email = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.signInbutton = page.locator("[value='Login']");
    this.productQuantity = page.locator("button[class='btn btn-custom'] label");
    //this.cartPageVerify=page.locator(Text='My Cart')
  }
  async goToDashboardPage() {
    await this.email.fill('busrayusuf@gmail.com');
    await this.password.fill('HKNclb8318.');
    await this.signInbutton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async addProduct(productName: string) {
    const text = await this.productText.allTextContents(); //in array list
    console.log(text);

    const count = await this.product.count();
    for (let i = 0; i < count; i++) {
      const text2 = await this.product.nth(i).locator('b').textContent(); //one by one write
      console.log(text2);
      if (
        (await this.product.nth(i).locator('b').textContent()) === productName
      ) {
        await this.product.nth(i).locator(this.addCart).click();
        break;
      }
    }
  }

  async naviToCart() {
    await this.cart.click();
  }
  async cartPageVerify() {
    await expect(page.getByText('My cart')).toBeVisible();
    console.log(page.getByText('My cart'));
  }

  async quantity() {
    const proQuantity = await this.productQuantity.textContent();
    console.log('product quantity in the chart ' + proQuantity);
    await expect(this.productQuantity).toHaveText('2');
  }
}
