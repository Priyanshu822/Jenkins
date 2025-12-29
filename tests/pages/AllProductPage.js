const { expect } = require("@playwright/test");
const { LOCATORS } = require("../fixtures/locators");

class AllProductPage {
    constructor(page) {
        this.page = page;
        this.productsButton = "a[href ='/products']";
        this.allproducts = 'h2:has-text("All Products")';
        this.productsList = '.features_items .col-sm-4';
        this.productViewBtn = "a[href = '/product_details/1']";
        this.pdpPage = "h2:has-text('Category')";
        this.productName = "h2:has-text('Blue Top')";
        this.productCategory = "p:has-text('Category: Women > Tops')";
        this.productPrice = "//span[contains(text(),'Rs')]";
        this.productAvailability = "b:has-text('Availability:')";
        this.productCondition = "b:has-text('Condition:')";
        this.productBrand = "b:has-text('Brand:')";
    }
    async launchApp(url) {
        await this.page.goto(url);
    }
    async verifyHomePage() {
        await expect(this.page.locator(LOCATORS.home.signupLoginButton)).toBeVisible();
    }
    async clickProductsButton() {
        await this.page.click(this.productsButton);
    }
    async verifyAllProductsPage() {
        await expect(this.page.locator(this.allproducts)).toBeVisible();
    }
    async verifyProductList() {
        await this.page.waitForSelector(this.productsList);
    }
    async clickViewProductButton() {
        await this.page.click(this.productViewBtn);
    }
    async verifyPDPPage() {
        await expect(this.page.locator(this.pdpPage)).toBeVisible();
    }
    async verifyProductsDetails() {
        await expect(this.page.locator(this.productName)).toBeVisible();
        await expect(this.page.locator(this.productCategory)).toBeVisible();
        await expect(
            this.page.locator(this.productPrice)
        ).toContainText("Rs");
        await expect(this.page.locator(this.productAvailability)).toBeVisible();
        await expect(this.page.locator(this.productCondition)).toBeVisible();
        await expect(this.page.locator(this.productBrand)).toBeVisible();
    }

}

module.exports = AllProductPage;