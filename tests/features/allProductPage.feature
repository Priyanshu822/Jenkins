@allproductpage
Feature:  Verify All Products and Product Detail Page
    Scenario: Verify all products and product detail page
        Given I navigate to the url "http://automationexercise.com"
        Then I verify user visit the home page successfully
        When I click on 'Products' button
        Then I verify user is navigated to 'ALL PRODUCTS' page successfully
        And I verify the products list displayed
        When I click on 'View Product' button for the first product
        Then I verify user is navigated to product detail page successfully
        And I verify that detail detaiil are visible:proudct name, product category, price, availability, condition, brand

