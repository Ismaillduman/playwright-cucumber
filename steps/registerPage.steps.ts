import { Then, When } from '@cucumber/cucumber';
import { page } from '../hooks/world';
import { RegisterPage } from '../page_objects/RegisterPage';

When('user should be able to navi to {string}', async function (string) {
  const registerPage = new RegisterPage(page);
  await registerPage.goToRegisterPage();
});

Then('user should see register table', async function () {
  const registerPage = new RegisterPage(page);
  await registerPage.verifyRegisterPage();
});

When(
  'user enter {string} {string} {string} and {string}',
  async function (string, string2, string3, phone_number: string) {
    const registerPage = new RegisterPage(page);
    await registerPage.enterFName();
    await registerPage.enterLName();
    await registerPage.enterEmail();
    await registerPage.phoneNmbr(phone_number);
  },
);

When(
  'user should be able to select {string} and {string}',
  async function (string, string2) {
    const registerPage = new RegisterPage(page);
    await registerPage.selectOccupAtion();
    await registerPage.clickGender();
  },
);

When(
  'user enter the {string} and {string}',
  async function (password: string, confirm_password: string) {
    const registerPage = new RegisterPage(page);
    await registerPage.enterPassword(password);
    await registerPage.confirmPass(confirm_password);
  },
);

When(
  'the user confirm that  is over {int} years old and and completes the registration',
  async function (int) {
    const registerPage = new RegisterPage(page);
    await registerPage.confirmAge();
  },
);

Then(
  'the user sees the message registration completed successfully',
  async function () {
    const registerPage = new RegisterPage(page);
    await registerPage.registrationEnd();
    await registerPage.verifyRegisterSuccessfulL();
  },
);
