const { expect } = require("@playwright/test");
const { LOCATORS } = require("../fixtures/locators");

class SubscriptionPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.subscriptionText = page.locator('text=SUBSCRIPTION');
        this.emailInput = page.locator('#susbscribe_email');
        this.subscribeButton = page.locator('#subscribe');
        this.successMessage = page.locator('text=You have been successfully subscribed!');
    }

    async navigate() {
        await this.page.goto('http://automationexercise.com');
    }

    async verifyHomePageVisible() {
        await this.page.waitForLoadState('domcontentloaded');
    }

    async scrollToFooter() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async verifySubscriptionText() {
        await this.subscriptionText.waitFor({ state: 'visible' });
    }

    async subscribeWithEmail(email) {
        await this.emailInput.fill(email);
        await this.subscribeButton.click();
    }

    async verifySuccessMessage() {
        await this.successMessage.waitFor({ state: 'visible' });
    }
}

module.exports =  SubscriptionPage ;
