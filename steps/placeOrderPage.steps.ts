// import { Given, When, Then } from "@cucumber/cucumber";
// import { page } from "../hooks/world";
// import { CartPage } from "../page_objects/CartPage";
// import { DashboardPage } from "../page_objects/DashboardPage";
// import { PlaceOrderPage } from "../page_objects/PlaceOrderPage";
// let orderId: string | null;

// //Place order Page
// Then(
//   "check to the correctness of the user Email {string} on the Cart Page",
//   async function (userName) {
//     const placeOrderPage = new PlaceOrderPage(page);
//     await placeOrderPage.verifyUserEmail(userName);
//   }
// );

// Then(
//   "user should be able select {string} , {string} the country",
//   async function (countrycode, countryName) {
//     const placeOrderPage = new PlaceOrderPage(page);
//     await placeOrderPage.userCountry(countrycode, countryName);
//   }
// );

// Then(
//   "user should be able to click place order button and verify the confirmation text",
//   async function () {
//     const placeOrderPage = new PlaceOrderPage(page);
//     orderId = await placeOrderPage.orderConfirmationGetOrderId();
//   }
// );

// Then("user can be able to navi to orders", async function () {
//   const placeOrderPage = new PlaceOrderPage(page);
//   await placeOrderPage.naviOrders();
// });
