
import{Given ,When,Then} from '@cucumber/cucumber'
import {page} from '../steps/world'
import{expect} from '@playwright/test'
import { LoginPage } from '../page_objects/LoginPage';







Given('I fill the login form with valid userName and password', async function () {
  const loginPage= new LoginPage(page);
  await loginPage.validLogin();
    
  });;



  Then('I should see the home page title \'Let\'s Shop\'', async function () {
    const loginPage= new LoginPage(page);
    await loginPage.dashBoardPageTitleVerify();
    
  });

  Given('I fill the login form with valid {string} and {string}', async function (_string, _string2) {
    
    const loginPage= new LoginPage(page);
     await loginPage.validLogin();
  });
