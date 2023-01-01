//Login and see dashboard

import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/world";
import { LoginPage } from "../page_objects/LoginPage";



Given('user should be able to on the {string}', async function (string) {
  const loginPage = new LoginPage(page);
  await loginPage.loginPageIsVisible();
});

When(
  "user fill the login form with valid {string} and {string}",
  async function (userName, userpassword) {
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(userName, userpassword);
  }
);

Then("I should see the home page title 'Let's Shop'", async function () {
  const loginPage = new LoginPage(page);
  await loginPage.dashBoardPageUrlVerify();
});

//Could not login

When(
  "I fill the login form with invalid {string} and {string}",
  async function (userName, userpassword) {
    const loginPage = new LoginPage(page);
    await loginPage.invalidLogin(userName, userpassword);
  }
);

Then("I should not see to the dashboard Page", async function () {
  const loginPage = new LoginPage(page);
  await loginPage.invalidLoginMessage();
});
