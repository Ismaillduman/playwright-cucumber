import { Given, Then, When } from "@cucumber/cucumber";
import { page } from "../hooks/world";
import { DashboardPage } from "../page_objects/DashboardPage";

//Dashboard Page
Given("User should be able to open dashboard Page", async function () {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.goToDashboardPage();
  
});

When(
  "user should be able to add the selected product {string} to the cart",
  async function (productName: string) {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.addProduct(productName);
  }
);

Then("user can be able to navi to chart page", async function () {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.naviToCart();
});
