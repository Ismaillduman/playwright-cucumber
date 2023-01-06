Feature: create a new user account
Feature Description: user should be able create a new account 
@regression @register
  Scenario Outline: 
    Given user should be able to on the 'Login Page'
    When user should be able to navi to 'register page'
    Then user should see register table
    When user enter 'first_name' 'last_name' 'email' and '<phone_number>'
    And user should be able to select 'OccupAtion' and 'Gender'
    And user enter the '<password>' and '<confirm_password>'
    And the user confirm that  is over 18 years old and and completes the registration
    Then the user sees the message registration completed successfully

    Examples: 
      | password       | confirm_password |phone_number|
      | SCTjhnsn1256., | SCTjhnsn1256.,   |1234567890|
