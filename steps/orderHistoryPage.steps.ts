
// import{Given ,When,Then} from '@cucumber/cucumber'
// import {page} from '../hooks/world'
// import{expect} from '@playwright/test'
// import { LoginPage } from '../page_objects/LoginPage';
// import { DashboardPage } from "../page_objects/DashboardPage";
// import { CartPage } from '../page_objects/CartPage';
// import { PlaceOrderPage } from '../page_objects/PlaceOrderPage';
// import { OrdersHistoryPage } from '../page_objects/OrdersHistoryPage';

// let orderId:string|null;


// //Order history Page
//   Then('user should be able to choose current product on history page and verify it',async function () {
//     const ordersHistoryPage= new OrdersHistoryPage(page);
//     await ordersHistoryPage.selectOrderId(orderId!);
//     expect(orderId?.includes(await ordersHistoryPage.getOrderDetailsId()as string)).toBeTruthy();

//   });