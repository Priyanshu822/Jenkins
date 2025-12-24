const path = require('path');
const { expect } = require('@playwright/test');
const { LOCATORS } = require("../fixtures/locators");


class TestCasePage {
    constructor(page) {
        this.page = page;

        // Locators
        this.testcasebutton = "a[href='/test_cases']";
        this.testcaseheading = "b:has-text('Test Cases')";
    }
    async launchApplication() {
        await this.page.goto("https://automationexercise.com");
    }
    async verifyHomePage() {
        await expect(this.page.locator(LOCATORS.home.signupLoginButton)).toBeVisible();
    }
    async clickTestCaseButton() {
        await this.page.click(this.testcasebutton);
    }
    async verifyTestCasePage () {
        await expect(this.page.locator(this.testcaseheading)).toBeVisible();
    }
}
module.exports = TestCasePage;
