const { Given, When, Then } = require('@cucumber/cucumber');
const SubscriptionPage = require('../pages/SubscriptionHomePage');

let subscriptionPage;

Given('user launches the browser', async function () {
    subscriptionPage = new SubscriptionPage(this.page);
});

When('user navigates to the automation exercise website', async function () {
  await subscriptionPage.navigate();
});

Then('home page should be visible successfully', async function () {
  await subscriptionPage.verifyHomePageVisible();
});

When('user scrolls down to the footer', async function () {
  await subscriptionPage.scrollToFooter();
});

Then('subscription text should be visible', async function () {
  await subscriptionPage.verifySubscriptionText();
});

When('user enters email address and clicks on subscribe button', async function () {
  await subscriptionPage.subscribeWithEmail('testuser123@gmail.com');
});

Then('success subscription message should be visible', async function () {
  await subscriptionPage.verifySuccessMessage();
});
