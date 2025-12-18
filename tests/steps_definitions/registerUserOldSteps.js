const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const selectors = {
    signupLoginButton: 'a[href="/login"]',
    newUserSignupText: 'h2:has-text("New User Signup!")',
    userSignUpEmailInput: 'input[data-qa="signup-email"]',
    userSignUpNameInput: 'input[data-qa="signup-name"]',
    oldUserSignUpButton: 'button[data-qa="signup-button"]',
    errorMessageEmailAlreadyExist: 'p:has-text("Email Address already exist!")'
}

Given('I open the application for old register', async function () {
    await this.page.goto("https://automationexercise.com");
})
Then('I verify signup login page is visible for old register user', async function () {
    await expect(this.page.locator(selectors.signupLoginButton)).toBeVisible();
})
When('I click on Signup Login button for old register user',async function () {
    await this.page.click(selectors.signupLoginButton);
})
Then("I verify New User Signup is visible for old register user",async function() {
    await expect(this.page.locator(selectors.newUserSignupText)).toBeVisible();
})
When('I enter old user name {string} and email {string}',async function (name,email) {
    await this.page.fill(selectors.userSignUpNameInput,name);
    await this.page.fill(selectors.userSignUpEmailInput,email);
})
When('I click on Signup button for old register user',async function () {
    await this.page.click(selectors.oldUserSignUpButton);
})
Then('I verify error message Email Address already exist is visible',async function () {
    await expect(this.page.locator(selectors.errorMessageEmailAlreadyExist)).toBeVisible();
})