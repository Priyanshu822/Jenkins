const { Given, When, Then } = require("@cucumber/cucumber");
const AllProductPage = require("../pages/AllProductPage");

let allproductpage;

Given("I navigate to the url {string}", async function (url) {
    allproductpage = new AllProductPage(this.page);
    await allproductpage.launchApp(url);
});

Then ("I verify user visit the home page successfully",async function () {
    await allproductpage.verifyHomePage();
})
When("I click on 'Products' button", async function() {
    await allproductpage.clickProductsButton();
})
Then("I verify user is navigated to 'ALL PRODUCTS' page successfully",async function () {
    await allproductpage.verifyAllProductsPage()
})
Then ("I verify the products list displayed", async function () {
    await allproductpage.verifyProductList();
})
When("I click on 'View Product' button for the first product", async function () {
    await allproductpage.clickViewProductButton();
})
Then("I verify user is navigated to product detail page successfully",async function (){
    await allproductpage.verifyPDPPage();
})
Then ("I verify that detail detaiil are visible:proudct name, product category, price, availability, condition, brand", async function () {
    await allproductpage.verifyProductsDetails();
})