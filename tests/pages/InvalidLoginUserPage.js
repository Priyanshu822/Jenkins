const { expect } = require("@playwright/test");
const { locators } = require("../fixtures/locators");
//hello

class InvalidLoginPage {
    constructor(page) {
        this.page = page;
    }

    async launchApp() {
        await this.page.goto("http://automationexercise.com");
    }

    async verifyHomePageVisible() {
        await this.page.waitForSelector(locators.texts.homeVisible);
    }

    async clickSignupLogin() {
        await this.page.click(locators.buttons.signupLoginBtn);
    }

    async verifyLoginHeader() {
        await this.page.waitForSelector(locators.texts.loginHeader);
    }

    async enterInvalidCredentials(email, password) {
        await this.page.fill(locators.inputs.emailInput, email);
        await this.page.fill(locators.inputs.passwordInput, password);
    }

    async clickLoginButton() {
        await this.page.click(locators.buttons.loginBtn);
    }

    async verifyInvalidError() {
        await this.page.waitForSelector(locators.texts.loginError);
    }
}

module.exports = InvalidLoginPage;
