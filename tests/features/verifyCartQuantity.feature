@productQuantity
Feature: Verify Product Quantity in Cart

  Scenario: Verify product quantity in cart page
    Given I launch the browser and navigate to automation exercise site for verify cart quantity
    Then I should see the home page successfully for verify cart quantity
    When I click on View Product of first product
    Then I should see product detail page opened
    When I increase product quantity to 4
    And I add the product to cart
    And I click on View Cart button
    Then I should see the product displayed with quantity "4" in cart
