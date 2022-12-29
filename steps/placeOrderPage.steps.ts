import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../hooks/world";
import { CartPage } from "../page_objects/CartPage";
import { DashboardPage } from "../page_objects/DashboardPage";
import { LoginPage } from "../page_objects/LoginPage";
import { PlaceOrderPage } from "../page_objects/PlaceOrderPage";

let orderId: string | null;

Given('user logged with {string}, {string} and add a product {string} inside the cart', async function (userName:string, userpassword:string,productName:string) {
    
    const loginPage=new LoginPage(page);
    await loginPage.validLogin(userName, userpassword);

    const dashboardPage=new DashboardPage(page);
    await dashboardPage.addProduct(productName);
    await dashboardPage.naviToCart();
    const cartPage= new CartPage(page);
    await cartPage.checkOut();

  });



//Place order Page
Then(
  "check to the correctness of the user Email {string} on the Cart Page",
  async function (userName) {
    const placeOrderPage = new PlaceOrderPage(page);
    await placeOrderPage.verifyUserEmail(userName);
  }
);

Then(
  "user should be able select {string} , {string} the country",
  async function (countrycode, countryName) {
    const placeOrderPage = new PlaceOrderPage(page);
    await placeOrderPage.userCountry(countrycode, countryName);
   
  }
);

Then(
  "user should be able to click place order button and verify the confirmation text {string}",
  async function (expectedText:string) {
    const placeOrderPage = new PlaceOrderPage(page);
    orderId = await placeOrderPage.orderConfirmationGetOrderId(expectedText);
  }
);

Then("user can be able to navi to orders", async function () {
  const placeOrderPage = new PlaceOrderPage(page);
  await placeOrderPage.naviOrders();
});
