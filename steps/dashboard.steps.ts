/* eslint-disable @typescript-eslint/no-unused-vars */
import { Given, Then, When } from '@cucumber/cucumber';
import { page } from '../hooks/world';
import { DashboardPage } from '../page_objects/DashboardPage';

//Dashboard Page
Given('User should be able to on the dashboard Page', async function () {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.goToDashboardPage();
});

When(
  'user should be able to add the selected product {string} to the cart',
  async function (productName: string) {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.addProduct(productName);
  },
);

When('user can be able to navi to chart page', async function () {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.naviToCart();
});
Then('user should see the {string}', async function (_string) {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.cartPageVerify();
});

When(
  'User can be able to add the selected product {string} twice to the chart',
  async function (productName) {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.addProduct(productName);
    await dashboardPage.addProduct(productName);
  },
);

Then(
  'User can be able to see on the chart module that user added {int} products from the dashboard page.',
  async function (int) {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.quantity();
  },
);
