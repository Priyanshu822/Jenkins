class LoginUserPage {
    constructor(page) {
        this.page = page;

        this.homePageLogo = 'img[alt="Website for automation practice"]';
        this.signupLoginButton = 'a[href="/login"]';
        this.loginHeader = 'div.login-form h2';
        this.emailField = 'input[data-qa="login-email"]';
        this.passwordField = 'input[data-qa="login-password"]';
        this.loginBtn = 'button[data-qa="login-button"]';
        this.loggedInText = '//*[contains(text(),"Logged in as")]';
        this.deleteAccountBtn = 'a[href="/delete_account"]';
        this.accountDeletedMsg = 'h2.title.text-center b';
    }

    async openApp() {
        await this.page.goto("https://automationexercise.com/");
    }

    async clickSignupLogin() {
        await this.page.click(this.signupLoginButton);
    }

    async verifyLoginHeader() {
        await this.page.waitForSelector(this.loginHeader);
    }

    async loginUser(email, password) {
        await this.page.fill(this.emailField, email);
        await this.page.fill(this.passwordField, password);
    }

    async clickLogin() {
        await this.page.click(this.loginBtn);
    }

    async verifyLoggedInText() {
        await this.page.waitForSelector(this.loggedInText);
    }

    async clickDeleteAccount() {
        await this.page.click(this.deleteAccountBtn);
    }

    async verifyAccountDeleted() {
        await this.page.waitForSelector(this.accountDeletedMsg);
    }
}

module.exports = LoginUserPage;
