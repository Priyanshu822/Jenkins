const { Given, When, Then } = require("@cucumber/cucumber");
const LogoutUserPage = require("../pages/LogoutUserPage");

let logoutUser; 

Given("I launch the application for logout",async function (){
    logoutUser = new LogoutUserPage(this.page);
    await logoutUser.openApp();
});

Then("I verify signup login page is visible", async function () {
    await logoutUser.homePageIsVisible();
})

When("I click to the signup login button", async function () {
    await logoutUser.clickSignupLoginButton();
});

Then("I verify Login to your account is visible for logout", async function () {
    await logoutUser.verifyLoginToYourAccount();
})
When("I enter user email {string} and password {string}",async function (email,password){
    await logoutUser.enterLoginCredentials(email,password);
})
When("I click to the login button", async function (){
    await logoutUser.clickLoginButton();
})
Then("I verify Logged in as username is visible", async function () {
    await logoutUser.verifyLoggedInAsUsername();
})
When("I click to the logout button", async function () {
    await logoutUser.clickLogoutButton();
})
Then("I should be navigated to login page", async function () {
    await logoutUser.NavigatedToLoginPage();
})




