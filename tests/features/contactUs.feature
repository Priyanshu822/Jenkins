@contactus
Feature: Contact Us

  Scenario: Successful Contact Us Form Submission
    Given I launch the application for contact us
    Then I verify home page is visible successfully
    When I click on Contact us button
    Then I verify get in touch is visible
    When I enter name 'test user',email 'testuser@email.com',subject 'test subject' and message 'this is a test message'
    And I upload file 'testfile.txt'
    When I click on submit button
    Then I verify success message Success! Your details have been submitted successfully. is visible
    When I click on home button
