const { expect } = require("@playwright/test");
const { LOCATORS } = require("../fixtures/locators");

class RegisterPage {
    constructor(page) {
        this.page = page;
    }

    async launchApp() {
        await this.page.goto("https://automationexercise.com");
    }

    async clickSignupLogin() {
        await this.page.click(LOCATORS.home.signupLoginButton);
    }

    async verifyNewUserSignup() {
        await expect(this.page.locator(LOCATORS.register.newUserSignupHeader)).toBeVisible();
    }

    async enterSignupDetails(name, email) {
        await this.page.fill(LOCATORS.register.signupNameInput, name);
        await this.page.fill(LOCATORS.register.signupEmailInput, email);
    }

    async clickSignupBtn() {
        await this.page.click(LOCATORS.register.signupButton);
    }

    async verifyEnterAccountInfo() {
        await expect(this.page.locator(LOCATORS.register.enterAccountInfoHeader)).toBeVisible();
    }

    async fillAccountInfo() {
        await this.page.check(LOCATORS.register.genderMrRadio);
        await this.page.fill(LOCATORS.register.passwordInput, "Test@1234");
        await this.page.selectOption(LOCATORS.register.dayDropdown, "10");
        await this.page.selectOption(LOCATORS.register.monthDropdown, "5");
        await this.page.selectOption(LOCATORS.register.yearDropdown, "1998");
        await this.page.check(LOCATORS.register.newsletterCheckbox);
        await this.page.check(LOCATORS.register.offersCheckbox);
    }

    async fillAddressDetails() {
        await this.page.fill(LOCATORS.register.firstName, "Priyanshu");
        await this.page.fill(LOCATORS.register.lastName, "Sharma");
        await this.page.fill(LOCATORS.register.company, "Infosys");
        await this.page.fill(LOCATORS.register.address1, "Sector 21");
        await this.page.fill(LOCATORS.register.address2, "Gurgaon");
        await this.page.selectOption(LOCATORS.register.countryDropdown, "India");
        await this.page.fill(LOCATORS.register.state, "HR");
        await this.page.fill(LOCATORS.register.city, "Gurgaon");
        await this.page.fill(LOCATORS.register.zipcode, "122001");
        await this.page.fill(LOCATORS.register.mobileNumber, "9999999999");
    }

    async clickCreateAccount() {
        await this.page.click(LOCATORS.register.createAccountButton);
    }

    async verifyAccountCreated() {
        await expect(this.page.locator(LOCATORS.register.accountCreatedMessage)).toBeVisible();
    }

    async clickContinue() {
        await this.page.click(LOCATORS.register.continueButton);
    }

    async verifyLoggedInUsername() {
        await expect(this.page.locator(LOCATORS.home.loggedInAs)).toBeVisible();
    }

    async clickDeleteAccount() {
        await this.page.click(LOCATORS.home.deleteAccountButton);
    }

    async verifyAccountDeleted() {
        await expect(this.page.locator(LOCATORS.home.accountDeletedMessage)).toBeVisible();
    }
}

module.exports = RegisterPage;


//without using global locators file 

// const { expect } = require('@playwright/test');

// class RegisterPage {

//     constructor(page) {
//         this.page = page;

//         // Locators
//         this.signupLoginBtn = 'a[href="/login"]';
//         this.newUserSignupText = 'h2:has-text("New User Signup!")';
//         this.signupName = 'input[data-qa="signup-name"]';
//         this.signupEmail = 'input[data-qa="signup-email"]';
//         this.signupBtn = 'button[data-qa="signup-button"]';

//         this.enterAccountInfoText = 'b:has-text("Enter Account Information")';

//         // Account Information
//         this.titleMr = '#id_gender1';
//         this.password = '#password';
//         this.days = '#days';
//         this.months = '#months';
//         this.years = '#years';
//         this.newsletter = '#newsletter';
//         this.offers = '#optin';

//         // Address Details
//         this.firstName = '#first_name';
//         this.lastName = '#last_name';
//         this.company = '#company';
//         this.address1 = '#address1';
//         this.address2 = '#address2';
//         this.country = '#country';
//         this.state = '#state';
//         this.city = '#city';
//         this.zipcode = '#zipcode';
//         this.mobile = '#mobile_number';

//         this.createAccountBtn = 'button[data-qa="create-account"]';
//         this.accountCreatedText = 'b:has-text("Account Created!")';
//         this.continueBtn = 'a[data-qa="continue-button"]';

//         this.loggedInUser = 'a:has-text("Logged in as")';
//         this.deleteAccountBtn = 'a[href="/delete_account"]';
//         this.accountDeletedText = 'b:has-text("Account Deleted!")';
//     }

//     async launchApp() {
//         await this.page.goto("https://automationexercise.com");
//     }

//     async clickSignupLogin() {
//         await this.page.click(this.signupLoginBtn);
//     }

//     async verifyNewUserSignup() {
//         await expect(this.page.locator(this.newUserSignupText)).toBeVisible();
//     }

//     async enterSignupDetails(name, email) {
//         await this.page.fill(this.signupName, name);
//         await this.page.fill(this.signupEmail, email);
//     }

//     async clickSignupBtn() {
//         await this.page.click(this.signupBtn);
//     }

//     async verifyEnterAccountInfo() {
//         await expect(this.page.locator(this.enterAccountInfoText)).toBeVisible();
//     }

//     async fillAccountInfo() {
//         await this.page.check(this.titleMr);
//         await this.page.fill(this.password, "Test@1234");
//         await this.page.selectOption(this.days, "10");
//         await this.page.selectOption(this.months, "5");
//         await this.page.selectOption(this.years, "1996");
//         await this.page.check(this.newsletter);
//         await this.page.check(this.offers);
//     }

//     async fillAddressDetails() {
//         await this.page.fill(this.firstName, "Priyanshu");
//         await this.page.fill(this.lastName, "Singh");
//         await this.page.fill(this.company, "Infosys");
//         await this.page.fill(this.address1, "Noida");
//         await this.page.fill(this.address2, "Sector 62");
//         await this.page.selectOption(this.country, "India");
//         await this.page.fill(this.state, "UP");
//         await this.page.fill(this.city, "Noida");
//         await this.page.fill(this.zipcode, "201301");
//         await this.page.fill(this.mobile, "9876543210");
//     }

//     async clickCreateAccount() {
//         await this.page.click(this.createAccountBtn);
//     }

//     async verifyAccountCreated() {
//         await expect(this.page.locator(this.accountCreatedText)).toBeVisible();
//     }

//     async clickContinue() {
//         await this.page.click(this.continueBtn);
//     }

//     async verifyLoggedInUsername() {
//         await expect(this.page.locator(this.loggedInUser)).toBeVisible();
//     }

//     async clickDeleteAccount() {
//         await this.page.click(this.deleteAccountBtn);
//     }

//     async verifyAccountDeleted() {
//         await expect(this.page.locator(this.accountDeletedText)).toBeVisible();
//     }
// }

// module.exports = RegisterPage;
