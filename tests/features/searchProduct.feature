@searchproduct
Feature: Search Product 

    Scenario: Verify product search functionality 
        Given I navigate to the url "http://automationexercise.com" for search product 
        Then I verify user visit the home page successfully for search product
        When I click on 'Products' button for search product 
        Then I verify user is navigated to 'All Products' page successfully for search product 
        When I enter 'shirt' in search input and click search button 
        Then I verify 'Search Products' is visible
        And I verify all the products related to search are visible
