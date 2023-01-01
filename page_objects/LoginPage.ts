import { expect, Locator, Page } from "@playwright/test";
import { PassThrough } from "stream";

export class LoginPage {
  signInbutton: Locator;
  email: Locator;
  password: Locator;
  page: Page;
  loginTextLoc: Locator;
 
  incorrestData:Locator;

  constructor(page: Page) {
    this.page = page; // for navigate url need
    this.email = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.signInbutton = page.locator("[value='Login']");
    this.incorrestData=page.locator('#toast-container');
    this.loginTextLoc=page.locator('.login-title')
  

  }



  async validLogin(userName:string, userpassword:string) {
    await this.email.type(userName);
    await this.password.fill(userpassword);
    await this.signInbutton.click();
    await this.page.waitForLoadState("networkidle");
  }

 async dashBoardPageUrlVerify(){

  await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/dashboard/dash');
  console.log(await this.page.title() + ' page title');
  
 }


 async invalidLogin(userName:string, userpassword:string) {
 
  await this.email.type(userName);
  await this.password.fill(userpassword);
  await this.signInbutton.click();
  await this.page.waitForLoadState("networkidle");
  
 
}

async invalidLoginMessage(){
 

await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/auth/login');  


  
 }
 
 async loginPageIsVisible(){
const loginText= await this.loginTextLoc.textContent();

  expect(loginText==='Log in');
 console.log(loginText);
  
 }

  // console.log(await this.page.title())
  // await expect(this.incorrestData).toHaveText('Incorrect email or password.');
  // console.log(await this.incorrestData.textContent());
}

