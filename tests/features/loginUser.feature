@loginuser
Feature: Login User with valid credentials

  Scenario: Login User with correct email and password
    Given I open the application
    And I click on Signup Login button
    And I verify Login to your account is visible
    When I enter login email "testpriyanshu100000@gmail.com" and password "Test@1234"
    And I click on login button
    Then I should see Logged in as username
    And I click delete account
    Then I should see account deleted message
