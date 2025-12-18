const { Given, When, Then } = require("@cucumber/cucumber");
const RegisterPage = require("../pages/RegisterPage");

let register;

Given("I launch the application", async function () {
    register = new RegisterPage(this.page);
    await register.launchApp();
});

Given("I navigate to the signup login page", async function () {
    await register.clickSignupLogin();
});

Given("I verify the New User Signup section is visible", async function () {
    await register.verifyNewUserSignup();
});

When("I enter name {string} and email {string}", async function (name, email) {
    await register.enterSignupDetails(name, email);
});

When("I click the signup button", async function () {
    await register.clickSignupBtn();
});

Then("I should see Enter Account Information section", async function () {
    await register.verifyEnterAccountInfo();
});

When("I fill account information", async function () {
    await register.fillAccountInfo();
});

When("I fill address details", async function () {
    await register.fillAddressDetails();
});

When("I click the Create Account button", async function () {
    await register.clickCreateAccount();
});

Then("I should see Account Created message", async function () {
    await register.verifyAccountCreated();
});

When("I click the Continue button", async function () {
    await register.clickContinue();
});

Then("I should see Logged in username", async function () {
    await register.verifyLoggedInUsername();
});

When("I click Delete Account", async function () {
    await register.clickDeleteAccount();
});

Then("I should see Account Deleted message", async function () {
    await register.verifyAccountDeleted();
});



// Without global locators file 
// const { Given, When, Then } = require("@cucumber/cucumber");
// const RegisterPage = require("../pages/RegisterPage");

// let register;

// Given("I launch the application", async function () {
//     register = new RegisterPage(this.page);
//     await register.launchApp();
// });

// Given("I navigate to the signup login page", async function () {
//     await register.clickSignupLogin();
// });

// Given("I verify the New User Signup section is visible", async function () {
//     await register.verifyNewUserSignup();
// });

// When("I enter name {string} and email {string}", async function (name, email) {
//     await register.enterSignupDetails(name, email);
// });

// When("I click the signup button", async function () {
//     await register.clickSignupBtn();
// });

// Then("I should see Enter Account Information section", async function () {
//     await register.verifyEnterAccountInfo();
// });

// When("I fill account information", async function () {
//     await register.fillAccountInfo();
// });

// When("I fill address details", async function () {
//     await register.fillAddressDetails();
// });

// When("I click the Create Account button", async function () {
//     await register.clickCreateAccount();
// });

// Then("I should see Account Created message", async function () {
//     await register.verifyAccountCreated();
// });

// When("I click the Continue button", async function () {
//     await register.clickContinue();
// });

// Then("I should see Logged in username", async function () {
//     await register.verifyLoggedInUsername();
// });

// When("I click Delete Account", async function () {
//     await register.clickDeleteAccount();
// });

// Then("I should see Account Deleted message", async function () {
//     await register.verifyAccountDeleted();
// });
