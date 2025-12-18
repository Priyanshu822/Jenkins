@invalidloginuser
Feature: Invalid Login User

Scenario: Invalid login attempt
    Given I launch the application for invalid login
    And I navigate to url 'http://automationexercise.com'
    Then I verify that home page is visible successfully
    When I click on 'Signup / Login' button in invalid login
    Then I verify 'Login to your account' is visible on login page
    When I enter incorrect login email "test@122333333" and password "test@1233545"
    And I click on 'Login' button in invalid login
    Then I verify login error message 'Your email or password is incorrect!'
