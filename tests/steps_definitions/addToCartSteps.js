const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const AddProductsToCartPage = require('../pages/AddToCart');
let addProductsPage;

Given('I launch the browser and navigate to automation exercise site for add to cart', async function () {
  await this.page.goto('http://automationexercise.com');
  addProductsPage = new AddProductsToCartPage(this.page);
});

Then('I should see the home page successfully for add to cart', async function () {
  await expect(this.page).toHaveTitle(/Automation Exercise/);
});

When('I click on Products button', async function () {
  await addProductsPage.clickProducts();
});

When('I add first product to cart and continue shopping', async function () {
  await addProductsPage.addFirstProduct();
});

When('I add second product to cart and view cart', async function () {
  await addProductsPage.addSecondProduct();
});

Then('I should see both products added to the cart', async function () {
  const products = await this.page.locator('tbody tr').count();
  expect(products).toBe(2);
});

Then('I should see correct price quantity and total for both products', async function () {
  const prices = await this.page.locator('.cart_price').count();
  const quantities = await this.page.locator('.cart_quantity button').count();
  const totals = await this.page.locator('.cart_total_price').count();

  expect(prices).toBe(2);
  expect(quantities).toBe(2);
  expect(totals).toBe(2);
});
