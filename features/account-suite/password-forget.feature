Feature: generate new Password
Feature Description:user should be able to generate a new password when forgets the password

  Background: login page must be ready
    Given user should be able to on the 'Login Page'

  @regression @password_forgot
  Scenario Outline: User should to generate new password with valid credentials
    When user should be able to navigate to 'new Password Page'
    Then user should see the Enter New Password table
    When user enter '<email>' '<password>' '<confirm_password>'
    And user should save the new password
    Then user should see the password changed successfully message

    Examples: 
      | email                | password    | confirm_password |
      | scott@gmail.com | BSRysf8193. | BSRysf8193.      |

  @regression @password_forgot
  Scenario Outline: User should not be able to generate new password with unregistered mail
    When user should be able to navigate to 'new Password Page'
    Then user should see the Enter New Password table
    When user enter '<email>' '<password>' '<confirm_password>'
    Then user try to save the new password but see user not found message

    Examples: 
      | email           | password    | confirm_password |
      | sctt@gmail.com | BSRysf8193. | BSRysf8193.      |
