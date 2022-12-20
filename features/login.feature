Feature: Login action

  As a user
  I want to login into application


  # Scenario: Login with valid credentials
  #   Given I fill the login form with valid userName and password
  #   Then I should see the home page title 'Let's Shop'

@demo
  Scenario Outline: Login with valid credentials

    Given I fill the login form with valid '<userName>' and '<password>'
    Then I should see the home page title 'Let's Shop'

    Examples:
      | userName             | password    |
      | busrayusuf@gmail.com | HKNclb8318. |S
      | ismaildumann@web.de  | HKNclb8318. |

  @demo
  Scenario Outline: User Try to login with invalid credentials

    Given I fill the login form with invalid '<userName>' and '<password>'
    Then I should not see the home page title 'Let's Shop'

    Examples:
      | userName             | password         |
      | buusuf@gmail.com     | HKNclb8318.      |
      | busrayusuf@gmail.com | abhfkdsjnsömbjos |
