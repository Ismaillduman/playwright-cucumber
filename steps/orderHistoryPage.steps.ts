/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/world';
import { expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage';
import { DashboardPage } from '../page_objects/DashboardPage';
import { CartPage } from '../page_objects/CartPage';
import { PlaceOrderPage } from '../page_objects/PlaceOrderPage';
import { OrdersHistoryPage } from '../page_objects/OrdersHistoryPage';

let orderId: string | null;
Given(
  'user logged with {string}, {string}, add a {string} inside the cart and I filled out {string}, {string} at the placeorder page and i see the {string} text.',
  async function (
    userName: string,
    userpassword: string,
    productName: string,
    countrycode: string,
    countryName: string,
    expectedText: string,
  ) {
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(userName, userpassword);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.addProduct(productName);
    await dashboardPage.naviToCart();

    const cartPage = new CartPage(page);
    await cartPage.checkOut();

    const placeOrderPage = new PlaceOrderPage(page);
    await placeOrderPage.verifyUserEmail(userName);

    await placeOrderPage.userCountry(countrycode, countryName);
    await placeOrderPage.confirmOrder();

    orderId = await placeOrderPage.orderConfirmationGetOrderId(expectedText);
    await placeOrderPage.naviOrders();
  },
);

//Order history Page
// Then(
//   "user should be able to choose current product on history page and verify it",
//   async function () {
//     const ordersHistoryPage = new OrdersHistoryPage(page);
//     await ordersHistoryPage.selectOrderId(orderId!);
//     expect(
//       orderId?.includes((await ordersHistoryPage.getOrderDetailsId()) as string)
//     ).toBeTruthy();
//   }
// );
When(
  'user should be able to choose current product on {string}',
  async function (_string) {
    const ordersHistoryPage = new OrdersHistoryPage(page);
    await ordersHistoryPage.selectOrderId(orderId!);
  },
);

Then('user should be able to verify current product', async function () {
  const ordersHistoryPage = new OrdersHistoryPage(page);

  expect(
    orderId?.includes((await ordersHistoryPage.getOrderDetailsId()) as string),
  ).toBeTruthy();
});
