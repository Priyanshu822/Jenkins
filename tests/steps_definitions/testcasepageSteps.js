const { Given, When, Then } = require('@cucumber/cucumber');
const TestCasePage = require('../pages/TestCasePage');

let testCasePage;

Given('I launch the application for test case page',async function () {
    testCasePage = new TestCasePage(this.page);
    await testCasePage.launchApplication();
});
Then('I verify that home page is visible for test case page',async function () {
    await testCasePage.verifyHomePage();
})
When ('I click on Test Case button', async function () {
    await testCasePage.clickTestCaseButton();
})
Then('I verify user is navigated to test case page successfully',async function () {
    await testCasePage.verifyTestCasePage();
})