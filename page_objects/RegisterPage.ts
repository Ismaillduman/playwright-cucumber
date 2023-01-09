import { expect, Locator, Page } from '@playwright/test'
import { faker } from '@faker-js/faker'

export class RegisterPage {
  registerBtn: Locator
  registerTable: Locator
  fName: Locator
  lName: Locator
  userEmail: Locator
  phone: Locator
  occupationDrop: Locator
  gender: Locator
  userPassword: Locator
  confirmPassword: Locator
  ageConfirm: Locator
  registerEnd: Locator
  studentDrop: Locator
  successfullyMessage: Locator

  constructor(page: Page) {
    this.registerBtn = page.locator('[routerlink="/auth/register"]')
    this.registerTable = page.locator('.login-title')
    this.fName = page.locator('#firstName')
    this.lName = page.locator('#lastName')
    this.userEmail = page.locator('#userEmail')
    this.userPassword = page.locator('#userPassword')
    this.confirmPassword = page.locator('#confirmPassword')
    this.phone = page.locator('#userMobile')
    this.occupationDrop = page.locator('[formcontrolname="occupation"]')
    this.gender = page.locator('[type="radio"]')
    this.ageConfirm = page.locator('[formcontrolname="required"]')
    this.registerEnd = page.locator('#login')
    this.studentDrop = page.locator('value="2: Student"')
    this.successfullyMessage = page.locator(
      '[aria-label="Registered Successfully"]'
    )
  }

  async goToRegisterPage() {
    await this.registerBtn.click()
  }
  async verifyRegisterPage() {
    await expect(this.registerTable).toHaveText('Register')
  }
  async enterEmail() {
    const email = faker.internet.email()
    await this.userEmail.fill(email)
  }
  async enterFName() {
    const firstName = faker.name.firstName()
    await this.fName.fill(firstName)
  }
  async enterLName() {
    const lastName = faker.name.lastName()
    await this.lName.fill(lastName)
  }
  async phoneNmbr(phone_number: string) {
    await this.phone.type(phone_number)
  }
  async selectOccupAtion() {
    await this.occupationDrop.selectOption('Student')
  }
  async clickGender() {
    await this.gender.first().click()
  }

  async enterPassword(password: string) {
    await this.userPassword.type(password)
  }
  async confirmPass(password: string) {
    await this.confirmPassword.type(password)
  }
  async confirmAge() {
    await this.ageConfirm.click()
    console.log(await this.ageConfirm.isChecked())

    await expect(this.ageConfirm).toBeChecked()
  }
  async registrationEnd() {
    await this.registerEnd.click()
  }
  async verifyRegisterSuccessfulL() {
    await expect(this.successfullyMessage).toHaveText(
      ' Registered Successfully '
    )
    const successfullyMessage = await this.successfullyMessage.textContent()
    console.log(successfullyMessage)
  }
}
