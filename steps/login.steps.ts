//Login and see dashboard

import { Given, Then, When } from '@cucumber/cucumber';
import { page } from '../hooks/world';
import { LoginPage } from '../page_objects/LoginPage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Given('user should be able to on the {string}', async function (string) {
  const loginPage = new LoginPage(page);
  await loginPage.loginPageIsVisible();
});

When(
  'user fill the login form with valid {string} and {string}',
  async function (userName, userpassword) {
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(userName, userpassword);
  },
);

Then("I should see the home page title 'Let's Shop'", async function () {
  const loginPage = new LoginPage(page);
  await loginPage.verifyloginSuccessfully();
  await loginPage.dashBoardPageUrlVerify();
});

//Could not login

When(
  'I fill the login form with invalid {string} and {string}',
  async function (userName, userpassword) {
    const loginPage = new LoginPage(page);
    await loginPage.invalidLogin(userName, userpassword);
  },
);

Then('I should not see to the dashboard Page', async function () {
  const loginPage = new LoginPage(page);
  await loginPage.invalidLoginMessage();
});
Then(
  'user should be able to see the incorrect email or password message',
  async function () {
    const loginPage = new LoginPage(page);
    await loginPage.verifyIncorrectMessageOrPassword();
  },
);
