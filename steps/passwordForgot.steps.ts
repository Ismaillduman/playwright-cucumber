import { Given, Then, When } from "@cucumber/cucumber";

import { page } from "../hooks/world";
import { PasswordForgotPage } from "../page_objects/PasswordForgotPage" 


When('user should be able to navigate to {string}', async function (string) {
    
    const passwordForgotPage =new PasswordForgotPage(page);
    await passwordForgotPage.goToNewpasswordPage();
  });



  Then('user should see the Enter New Password table', async function () {
    const passwordForgotPage= new PasswordForgotPage(page);
    await passwordForgotPage.verifyNewpasswordPage();
  });



  When('user enter {string} {string} {string}', async function (email:string, password:string, confirm_password:string) {
   const passwordForgotPage =new PasswordForgotPage(page);
   await passwordForgotPage.enterCredentials(email,password,confirm_password);
  });



  When('user should save the new password',async function () {
    const passwordForgotPage=new PasswordForgotPage(page);
    await passwordForgotPage.savePassword();
  });

  Then('user try to save the new password but see {string} message', async function (string) {
    const passwordForgotPage= new PasswordForgotPage(page);
    await passwordForgotPage.savePassword();
    await passwordForgotPage.verifyUserNotFound();
  });



  Then('user should see the password changed successfully message',async function () {
    const passwordForgotPage = new PasswordForgotPage(page);
    await passwordForgotPage.confirmPasswordChangedSuccessfully();
  });