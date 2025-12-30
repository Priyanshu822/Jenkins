const { expect } = require("@playwright/test");
const { LOCATORS } = require("../fixtures/locators");

class SearchProduct {
    constructor(page) {
        this.page = page;
        this.productsButton = "a[href ='/products']";
        this.allproducts = 'h2:has-text("All Products")';
        this.searchInput = "//input[@id='search_product']";
        this.searchButton = "//button[@id='submit_search']";
        this.searchProducts = "h2:has-text('Searched Products')";
        this.searchProductsList = ".features_items .col-sm-4"
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
    async enterProductSearchInput(productName) {
        await this.page.fill(this.searchInput, productName);
        await this.page.click(this.searchButton);
    }
    async verifySearchProductsVisible() {
        await expect(this.page.locator(this.searchProducts)).toBeVisible();
    }
    async verifySearchProductsList() {
        const products = this.page.locator(this.searchProductsList);
        const count = await products.count();
        expect(count).toBeGreaterThan(0);
    }
}

module.exports = SearchProduct;