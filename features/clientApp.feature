Feature: Client App action

  As a user
  I want to login into application


  # Scenario: Login with valid credentials
  #   Given I fill the login form with valid userName and password
  #   Then I should see the home page title 'Let's Shop'


  Scenario Outline: Login with valid credentials

    Given I fill the login form with valid '<userName>' and '<password>'
    Then I should see the home page title 'Let's Shop'

    Examples:
      | userName             | password    |
      | busrayusuf@gmail.com | HKNclb8318. |
      | ismaildumann@web.de  | HKNclb8318. |


  Scenario Outline: User Try to login with invalid credentials

    Given I fill the login form with invalid '<userName>' and '<password>'
    Then I should not see the home page title 'Let's Shop'

    Examples:
      | userName             | password         |
      | buusuf@gmail.com     | HKNclb8318.      |
      | busrayusuf@gmail.com | abhfkdsjnsömbjos |


  @demo
  Scenario Outline: From dashboard page  add the product to the cart.

    Given User should be able to open dashboard Page
    When user should be able to add the selected product '<productName>' to the cart
    Then  user can be able to navi to chart page



    Examples:
      | productName     |
      | zara coat 3     |
      | adidas original |
      | iphone 13 pro   |



