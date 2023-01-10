import { expect, Locator, Page } from '@playwright/test';

export class PasswordForgotPage {
  newPasswordSign: Locator;
  email: Locator;
  password: Locator;
  confirmPasword: Locator;
  saveNewPassword: Locator;
  passwordChangeMessage: Locator;
  passwordForgotLink: Locator;
  userNotFound: Locator;

  constructor(page: Page) {
    this.newPasswordSign = page.locator('.card-title.text-center');
    this.email = page.locator("input[placeholder='Enter your email address']");
    this.password = page.locator('#userPassword');
    this.confirmPasword = page.locator('#confirmPassword');
    this.saveNewPassword = page.locator('[type="submit"]');
    this.passwordChangeMessage = page.locator(
      '[aria-label="Password Changed Successfully"]',
    );
    this.passwordForgotLink = page.locator('.forgot-password-link');
    this.userNotFound = page.locator("[role='alertdialog']");
  }

  async goToNewpasswordPage() {
    await this.passwordForgotLink.click();
  }
  async verifyNewpasswordPage() {
    await expect(this.newPasswordSign).toHaveText('Enter New Password');
    const newPasswordTabela = await this.newPasswordSign.textContent();
    console.log(newPasswordTabela);
  }
  async enterCredentials(
    email: string,
    password: string,
    confirmPasword: string,
  ) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPasword.fill(confirmPasword);
  }
  async savePassword() {
    await this.saveNewPassword.click();
  }
  async confirmPasswordChangedSuccessfully() {
    await expect(this.passwordChangeMessage).toHaveText(
      ' Password Changed Successfully ',
    );
    const passwordChange = await this.passwordChangeMessage.textContent();
    console.log(passwordChange);
  }
  async verifyUserNotFound() {
    await expect(this.userNotFound).toHaveText(' User Not found. ');
    const userNotFound = await this.userNotFound.textContent();
    console.log(userNotFound);
  }
}
