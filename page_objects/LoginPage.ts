import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  signInbutton: Locator;
  email: Locator;
  password: Locator;
  page: Page;
  userName:string;
  userpassword:string;

  constructor(page: Page) {
    this.page = page; // for navigate url need
    this.email = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.signInbutton = page.locator("[value='Login']");
    this.userName='busrayusuf@gmail.com';
    this.userpassword='HKNclb8318.';
  }



  async validLogin() {
    await this.email.type(this.userName);
    await this.password.fill(this.userpassword);
    await this.signInbutton.click();
    await this.page.waitForLoadState("networkidle");
  }

 async dashBoardPageTitleVerify(){

  await expect(this.page).toHaveTitle("Let's Shop");
  console.log(await this.page.title() + ' page title');
  

  
 
  
 }
}
