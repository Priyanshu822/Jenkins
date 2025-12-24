const { expect } = require('@playwright/test');

class LoginUserPage {
    constructor(page) {
        this.page = page;

        this.signupLoginBtn = 'a[href="/login"]';
        this.loginHeader = 'text=Login to your account';
        this.emailInput = 'input[data-qa="login-email"]';
        this.passwordInput = 'input[data-qa="login-password"]';
        this.loginBtn = 'button[data-qa="login-button"]';
        this.loggedInAs = '//*[contains(text(),"Logged in as")]';
        this.invalidMsg = 'p:has-text("Your email or password is incorrect!")';
        this.deleteAccountBtn = 'a[href="/delete_account"]';
        this.accountDeletedMsg = 'text=Account Deleted!';
    }

    async openApp() {
        await this.page.goto('https://automationexercise.com');
    }

    async clickSignupLogin() {
        await this.page.click(this.signupLoginBtn);
    }

    async verifyLoginHeader() {
        await expect(this.page.locator(this.loginHeader)).toBeVisible();
    }

    async enterCredentials(email, password) {
        await this.page.fill(this.emailInput, email || '');
        await this.page.fill(this.passwordInput, password || '');
    }

    async clickLogin() {
        await this.page.click(this.loginBtn);
    }

    async verifySuccessLogin() {
        await expect(this.page.locator(this.loggedInAs)).toBeVisible({ timeout: 10000 });
    }

    async verifyInvalidLogin() {
        await expect(this.page.locator('text=Login to your account')).toBeVisible();
    }

    async deleteAccount() {
        await this.page.click(this.deleteAccountBtn);
        await expect(this.page.locator(this.accountDeletedMsg)).toBeVisible();
    }
}

module.exports = LoginUserPage;



// class LoginUserPage {
//     constructor(page) {
//         this.page = page;

//         this.homePageLogo = 'img[alt="Website for automation practice"]';
//         this.signupLoginButton = 'a[href="/login"]';
//         this.loginHeader = 'div.login-form h2';
//         this.emailField = 'input[data-qa="login-email"]';
//         this.passwordField = 'input[data-qa="login-password"]';
//         this.loginBtn = 'button[data-qa="login-button"]';
//         this.loggedInText = '//*[contains(text(),"Logged in as")]';
//         this.deleteAccountBtn = 'a[href="/delete_account"]';
//         this.accountDeletedMsg = 'h2.title.text-center b';
//     }

//     async openApp() {
//         await this.page.goto("https://automationexercise.com/");
//     }

//     async clickSignupLogin() {
//         await this.page.click(this.signupLoginButton);
//     }

//     async verifyLoginHeader() {
//         await this.page.waitForSelector(this.loginHeader);
//     }

//     async loginUser(email, password) {
//         await this.page.fill(this.emailField, email);
//         await this.page.fill(this.passwordField, password);
//     }

//     async clickLogin() {
//         await this.page.click(this.loginBtn);
//     }

//     async verifyLoggedInText() {
//         await this.page.waitForSelector(this.loggedInText);
//     }

//     async clickDeleteAccount() {
//         await this.page.click(this.deleteAccountBtn);
//     }

//     async verifyAccountDeleted() {
//         await this.page.waitForSelector(this.accountDeletedMsg);
//     }
// }

// module.exports = LoginUserPage;
