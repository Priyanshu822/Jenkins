@register
Feature: Register User

  Scenario: Successful User Registration
    Given I launch the application
    And I navigate to the signup login page
    And I verify the New User Signup section is visible
    When I enter name "Priyanshu" and email "priyanshu@test.com"
    And I click the signup button
    Then I should see Enter Account Information section
    When I fill account information
    And I fill address details
    And I click the Create Account button
    Then I should see Account Created message
    When I click the Continue button
    Then I should see Logged in username
    When I click Delete Account
    Then I should see Account Deleted message
