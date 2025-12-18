const { Given, When, Then } = require("@cucumber/cucumber");
const InvalidLoginPage = require("../pages/InvalidLoginUserPage")
Given("I launch the application for invalid login", async function () {
    this.invalidLogin = new InvalidLoginPage(this.page);
    await this.invalidLogin.launchApp();
});

Given("I navigate to url {string}", async function (url) {
    await this.page.goto(url);
});

Then("I verify that home page is visible successfully", async function () {
    await this.invalidLogin.verifyHomePageVisible();
});

When("I click on {string} button in invalid login", async function (buttonName) {
    if (buttonName === "Signup / Login") {
        await this.invalidLogin.clickSignupLogin();
    }
    if (buttonName === "Login") {
        await this.invalidLogin.clickLoginButton();
    }
});

Then("I verify {string} is visible on login page", async function (text) {
    if (text.includes("Login to your account")) {
        await this.invalidLogin.verifyLoginHeader();
    }
});

When(
    "I enter incorrect login email {string} and password {string}",
    async function (email, password) {
        await this.invalidLogin.enterInvalidCredentials(email, password);
    }
);

Then("I verify login error message {string}", async function (errorMsg) {
    await this.invalidLogin.verifyInvalidError();
});
