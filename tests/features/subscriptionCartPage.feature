@subscriptionCartPage
Feature: Subscription in Cart Page

  Scenario: Verify Subscription in Cart page
    Given I launch the browser and navigate to automation exercise site
    Then I should see the home page successfully
    When I click on the Cart button
    And I scroll down to the footer
    Then I should see the text "Subscription"
    When I enter email address and click on subscribe button
    Then I should see success message "You have been successfully subscribed!"
