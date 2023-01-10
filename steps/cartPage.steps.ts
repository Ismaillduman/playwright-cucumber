/* eslint-disable import/no-unresolved */
import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/world';
import { CartPage } from '../page_objects/CartPage';
import { DashboardPage } from '../page_objects/DashboardPage';
import { LoginPage } from '../page_objects/LoginPage';

Given(
  'user logged with {string}, {string} and a {string} inside the cart.',
  async function (userName: string, userpassword: string, productName: string) {
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(userName, userpassword);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.addProduct(productName);
    await dashboardPage.naviToCart();
  },
);
//Cart Page
Then(
  'user check to  the correctness of the product {string} on the Cart Page',
  async function (productName) {
    const cartPage = new CartPage(page);
    await cartPage.getProductLocator(productName);
    await cartPage.verifyProduct(productName);
  },
);
When('user click checkout button', async () => {
  const cartPage = new CartPage(page);
  await cartPage.checkOut();
});

Then('user should be able to see the {string}', async function (string) {
  const cartPage = new CartPage(page);
  await cartPage.placeOrderPageConfirmation();
});
