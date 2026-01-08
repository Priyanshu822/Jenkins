@placeOrderWhileCheckout
Feature: Place Order - Register while Checkout

  Scenario: User registers during checkout and places order successfully
    Given I launch the browser and open automation exercise website
    And I verify home page is visible
    When I add products to the cart
    And I open cart page
    Then I verify cart page is displayed
    When I proceed to checkout
    And I click Register or Login
    And I complete signup and create account
    Then I verify account is created and user is logged in
    When I open cart again
    And I proceed to checkout again
    Then I verify address details and order review
    When I place the order with comments
    And I enter payment details and confirm order
    Then I verify order placed successfully
    When I delete the account
    Then I verify account deleted successfully
