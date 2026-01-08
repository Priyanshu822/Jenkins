const { Given, When, Then } = require('@cucumber/cucumber');
const PlaceOrderPage = require('../pages/PlaceOrderWhileCheckout')
const { expect } = require('@playwright/test');

let placeOrder;

Given('I launch the browser and open automation exercise website', async function ()  {
    placeOrder = new PlaceOrderPage(this.page);
    await placeOrder.openApp();
});

Given('I verify home page is visible', async function ()  {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
});

When('I add products to the cart', async () => {
    await placeOrder.addProductToCart();
});

When('I open cart page', async () => {
    await placeOrder.openCart();
});

Then('I verify cart page is displayed', async function ()  {
    await expect(this.page).toHaveURL(/view_cart/);
});

When('I proceed to checkout', async function()  {
    await placeOrder.proceedToCheckout();
});

When('I click Register or Login', async () => {
    await this.page.click(placeOrder.registerLoginBtn);
});

When('I complete signup and create account', async () => {
    await placeOrder.signup();
    await placeOrder.fillAccountDetails();
});

Then('I verify account is created and user is logged in', async () => {
    await expect(this.page.locator('text=ACCOUNT CREATED!')).toBeVisible();
});

When('I open cart again', async () => {
    await placeOrder.openCart();
});

When('I proceed to checkout again', async () => {
    await placeOrder.proceedToCheckout();
});

Then('I verify address details and order review', async () => {
    await expect(this.page.locator('text=Address Details')).toBeVisible();
});

When('I place the order with comments', async () => {
    await placeOrder.placeOrder();
});

When('I enter payment details and confirm order', async () => {
    await placeOrder.makePayment();
});

Then('I verify order placed successfully', async () => {
    await expect(this.page.locator('text=Your order has been placed successfully!')).toBeVisible();
});

When('I delete the account', async () => {
    await this.page.click('a[href="/delete_account"]');
});

Then('I verify account deleted successfully', async () => {
    await expect(this.page.locator('text=ACCOUNT DELETED!')).toBeVisible();
    await browser.close();
});
