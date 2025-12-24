const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ContactUsPage = require('../pages/ContactUs')

let contactUsPage;

/* ---------------- GIVEN ---------------- */

Given('I launch the application for contact us', async function () {
  contactUsPage = new ContactUsPage(this.page);
  await contactUsPage.launchApplication();
});

/* ---------------- THEN ---------------- */

Then('I verify home page is visible successfully', async function () {
  await contactUsPage.verifyHomePage();
});

/* ---------------- WHEN ---------------- */

When('I click on Contact us button', async function () {
  await contactUsPage.clickContactUs();
});

Then('I verify get in touch is visible', async function () {
  await contactUsPage.verifyGetInTouchVisible();
});

When(
  "I enter name {string},email {string},subject {string} and message {string}",
  async function (name, email, subject, message) {
    await contactUsPage.fillContactForm(name, email, subject, message);
  }
);

When('I upload file {string}', async function (fileName) {
  await contactUsPage.uploadFile(fileName);
});

When('I click on submit button', async function () {
  await contactUsPage.clickSubmit();
});

Then('I verify success message Success! Your details have been submitted successfully. is visible', async function () {
    await contactUsPage.verifySuccessMessage();
  }); 


When('I click on home button', async function () {
  await contactUsPage.clickHomeButton();
});
