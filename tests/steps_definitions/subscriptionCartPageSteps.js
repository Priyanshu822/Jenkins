const {Given,When,Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SubscriptionCartPage = require('../pages/SubscriptionCartPage');


let subscriptionCartPage;

Given('I launch the browser and navigate to automation exercise site', async function () {
  await this.page.goto('http://automationexercise.com');
  subscriptionCartPage = new SubscriptionCartPage(this.page);
});

Then('I should see the home page successfully', async function () {
  await expect(this.page).toHaveTitle(/Automation Exercise/);
});

When('I click on the Cart button', async function () {
  await subscriptionCartPage.clickCart();
});

When('I scroll down to the footer', async function () {
  await subscriptionCartPage.scrollToFooter();
});

Then('I should see the text {string}', async function (text) {
  await expect(this.page.locator('h2')).toContainText(text);
});

When('I enter email address and click on subscribe button', async function () {
  await subscriptionCartPage.enterEmail('testuser@gmail.com');
});

Then('I should see success message {string}', async function (message) {
  await expect(this.page.locator('#success-subscribe')).toContainText(message);
});
