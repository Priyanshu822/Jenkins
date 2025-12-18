const { expect } = require("@playwright/test");
const { LOCATORS } = require("../fixtures/locators");

class LogoutUserPage {
    constructor(page) {
        this.page = page;
    }
    async openApp() {
        await this.page.goto("http://automationexercise.com");
    }
    async homePageIsVisible() {
        await expect(this.page.locator(LOCATORS.home.signupLoginButton)).toBeVisible();
    }
    async clickSignupLoginButton() {
        await this.page.click(LOCATORS.home.signupLoginButton);
    }
    async verifyLoginToYourAccount() {
        await expect(this.page.locator(LOCATORS.login.loginHeader)).toBeVisible();
    }
    async enterLoginCredentials(email, password) {
        await this.page.fill(LOCATORS.login.emailInput, email);
        await this.page.fill(LOCATORS.login.passwordInput, password);
    }
    async clickLoginButton() {
        await this.page.click(LOCATORS.login.loginButton);
    }
    async verifyLoggedInAsUsername() {
        await expect(this.page.locator(LOCATORS.home.loggedInAs)).toBeVisible();
    }
    async clickLogoutButton() {
        await this.page.click(LOCATORS.afterLogin.logoutButton);
    }
    async NavigatedToLoginPage() {
        await expect(this.page.locator(LOCATORS.login.loginHeader)).toBeVisible();
    }

}

module.exports = LogoutUserPage;
