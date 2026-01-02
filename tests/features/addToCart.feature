@addToCart
Feature: Add Products in Cart

  Scenario: Verify products are added to cart with correct details
    Given I launch the browser and navigate to automation exercise site for add to cart
    Then I should see the home page successfully for add to cart
    When I click on Products button
    And I add first product to cart and continue shopping
    And I add second product to cart and view cart
    Then I should see both products added to the cart
    And I should see correct price quantity and total for both products
