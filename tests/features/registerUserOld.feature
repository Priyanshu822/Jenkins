@registeruserold
Feature:Register User with exisiting email

  Scenario: Register User with existing email
    Given I open the application for old register 
    Then I verify signup login page is visible for old register user
    And I click on Signup Login button for old register user
    And I verify New User Signup is visible for old register user
    When I enter old user name "testuser" and email "testuser13579@example.com"
    And I click on Signup button for old register user
    Then I verify error message Email Address already exist is visible