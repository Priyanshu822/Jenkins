@logoutuser
Feature: Logout User

    Scenario: Successful User Logout
        Given I launch the application for logout
        Then I verify signup login page is visible
        When I click to the signup login button
        Then I verify Login to your account is visible for logout
        When I enter user email "testuser13579@example.com" and password "1234567890"
        When I click to the login button
        Then I verify Logged in as username is visible
        When I click to the logout button
        Then I should be navigated to login page
