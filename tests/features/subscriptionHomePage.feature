@subscriptionHomePage
Feature: Verify Subscription functionality on Home Page

  Scenario: Verify subscription in home page
    Given user launches the browser
    When user navigates to the automation exercise website
    Then home page should be visible successfully
    When user scrolls down to the footer
    Then subscription text should be visible
    When user enters email address and clicks on subscribe button
    Then success subscription message should be visible
