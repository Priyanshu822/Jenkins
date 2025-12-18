const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { LOCATORS } = require("../fixtures/locators");

// ---------------------------
// 🔹 OPEN APPLICATION
// ---------------------------
Given("I open the application", async function () {
    await this.page.goto("http://automationexercise.com");
});

// ---------------------------
// 🔹 CLICK SIGNUP / LOGIN
// ---------------------------
When("I click on Signup Login button", async function () {
    await this.page.click(LOCATORS.home.signupLoginButton);
});

// ---------------------------
// 🔹 VERIFY LOGIN HEADER
// ---------------------------
When("I verify Login to your account is visible", async function () {
    await expect(this.page.locator(LOCATORS.login.loginHeader)).toBeVisible();
});

// ---------------------------
// 🔹 ENTER LOGIN CREDENTIALS
// ---------------------------
When(
    "I enter login email {string} and password {string}",
    async function (email, password) {
        await this.page.fill(LOCATORS.login.emailInput, email);
        await this.page.fill(LOCATORS.login.passwordInput, password);
    }
);

// ---------------------------
// 🔹 CLICK LOGIN BUTTON
// ---------------------------
When("I click on login button", async function () {
    await this.page.click(LOCATORS.login.loginButton);
});

// ---------------------------
// 🔹 VERIFY LOGGED IN USERNAME
// ---------------------------
Then("I should see Logged in as username", async function () {
    await expect(this.page.locator(LOCATORS.home.loggedInAs)).toBeVisible();
});

// ---------------------------
// 🔹 DELETE ACCOUNT
// ---------------------------
Then("I click delete account", async function () {
    await this.page.click(LOCATORS.home.deleteAccountButton);
});

// ---------------------------
// 🔹 VERIFY ACCOUNT DELETED
// ---------------------------
Then("I should see account deleted message", async function () {
    await expect(this.page.locator(LOCATORS.home.accountDeletedMessage)).toBeVisible();
});
