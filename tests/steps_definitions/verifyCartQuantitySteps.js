const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ProductQuantityPage = require('../pages/VerifyCartQuantity');
let productQuantityPage;

Given('I launch the browser and navigate to automation exercise site for verify cart quantity', async function () {
  await this.page.goto('http://automationexercise.com');
  productQuantityPage = new ProductQuantityPage(this.page);
});

Then('I should see the home page successfully for verify cart quantity', async function () {
  await expect(this.page).toHaveTitle(/Automation Exercise/);
});

When('I click on View Product of first product', async function () {
  await productQuantityPage.clickViewProduct();
});

Then('I should see product detail page opened', async function () {
  await expect(this.page).toHaveURL(/product_details/);
});

When('I increase product quantity to {int}', async function (qty) {
  await productQuantityPage.setQuantity(qty.toString());
});

When('I add the product to cart', async function () {
  await productQuantityPage.addToCart();
});

When('I click on View Cart button', async function () {
  await productQuantityPage.viewCart();
});

Then('I should see the product displayed with quantity {string} in cart', async function (expectedQty) {
  const actualQty = await this.page.locator('.cart_quantity button').textContent();
  expect(actualQty.trim()).toBe(expectedQty);
});
