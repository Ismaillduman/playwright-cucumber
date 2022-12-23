
import{Given ,When,Then} from '@cucumber/cucumber'
import {page} from '../hooks/world'
import{expect} from '@playwright/test'
import { LoginPage } from '../page_objects/LoginPage';
import { DashboardPage } from "../page_objects/DashboardPage";
import { CartPage } from '../page_objects/CartPage';
import { PlaceOrderPage } from '../page_objects/PlaceOrderPage';
import { OrdersHistoryPage } from '../page_objects/OrdersHistoryPage';

let orderId:string|null;



  Given('I fill the login form with valid {string} and {string}', async function (userName, userpassword) {
    
    const loginPage= new LoginPage(page);
     await loginPage.validLogin(userName,userpassword);
  });

  Then('I should see the home page title \'Let\'s Shop\'', async function () {
    const loginPage= new LoginPage(page);
    await loginPage.dashBoardPageTitleVerify();
  });

  Given('I fill the login form with invalid {string} and {string}', async function (userName, userpassword) {
    const loginPage= new LoginPage(page);
    await loginPage.invalidLogin(userName,userpassword);
  });



  Then('I should not see the home page title \'Let\'s Shop\'', async function () {
    const loginPage= new LoginPage(page);
    await loginPage.invalidLoginMessage();
  });

  Given('User should be able to open dashboard Page', async function () {
    const dashboardPage=new DashboardPage(page);
   await dashboardPage.goToDashboardPage();
   
  });

  

  When('user should be able to add the selected product {string} to the cart',async function (productName:string) {
   
    const dashboardPage=new DashboardPage(page);
    await dashboardPage.addProduct(productName);
  });



  Then('user can be able to navi to chart page', async function () {
    const dashboardPage= new DashboardPage(page);
await dashboardPage.naviToCart();
  });

  Then('user check to  the correctness of the product {string} on the Cart Page', async function (productName) {
    const cartPage=new CartPage(page);
    // await page.pause()
    await cartPage.getProductLocator(productName);
    await cartPage.verifyProduct(productName);
  });
  Then('user click checkout button', async () => {
    const cartPage= new CartPage(page);
    await cartPage.checkOut();

  });
  Then('check to the correctness of the user Email {string} on the Cart Page',async function (userName) {
   const placeOrderPage=new PlaceOrderPage(page);
   await placeOrderPage.verifyUserEmail(userName);
  });



  Then('user should be able select {string} , {string} the country',async function (countrycode,countryName) {
    const placeOrderPage=new PlaceOrderPage(page);
    await placeOrderPage.userCountry(countrycode,countryName);
  });



  Then('user should be able to click place order button and verify the confirmation text',async function () {
    const placeOrderPage=new PlaceOrderPage(page);
   // await placeOrderPage.orderConfirmationGetOrderId();
     orderId=await placeOrderPage.orderConfirmationGetOrderId();

  });

  Then('user can be able to navi to orders',async function () {
    const placeOrderPage=new PlaceOrderPage(page);
    await placeOrderPage.naviOrders();
    
  });



  Then('user should be able to choose current product on history page and verify it',async function () {
    const ordersHistoryPage= new OrdersHistoryPage(page);
    await ordersHistoryPage.selectOrderId(orderId!);
    expect(orderId?.includes(await ordersHistoryPage.getOrderDetailsId()as string)).toBeTruthy();

  });



 