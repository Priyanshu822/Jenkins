const {Given,When,Then} = require("@cucumber/cucumber");
const SearchProduct = require("../pages/SearchProduct");

let searchproduct;

Given ("I navigate to the url {string} for search product",async function (url) {
    searchproduct = new SearchProduct(this.page);
    await searchproduct.launchApp(url);
});

Then ("I verify user visit the home page successfully for search product",async function() {
    await searchproduct.verifyHomePage();
})
When ("I click on 'Products' button for search product",async function () {
    await searchproduct.clickProductsButton();
})
Then ("I verify user is navigated to 'All Products' page successfully for search product",async function() {
    await searchproduct.verifyAllProductsPage();
})
When ("I enter {string} in search input and click search button",async function (productName) {
    await searchproduct.enterProductSearchInput(productName);
})
Then("I verify 'Search Products' is visible",async function () {
    await searchproduct.verifySearchProductsVisible();
})
Then("I verify all the products related to search are visible",async function() {
    await searchproduct.verifySearchProductsList();
})