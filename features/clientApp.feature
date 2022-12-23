Feature: Client App action

  As a user
  I want to login into application


@demo
  Scenario Outline: Login with valid credentials

    Given I fill the login form with valid '<userName>' and '<password>'
    Then I should see the home page title 'Let's Shop'

    Examples:
      | userName             | password    |
      | busrayusuf@gmail.com | HKNclb8318. |
      | ismaildumann@web.de  | HKNclb8318. |

@demo
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
    Then  user check to  the correctness of the product '<productName>' on the Cart Page
    Then user click checkout button
    Then check to the correctness of the user Email '<userName>' on the Cart Page
    Then user should be able select 'ind' , 'India' the country
    Then user should be able to click place order button and verify the confirmation text
    Then user can be able to navi to orders
    And user should be able to choose current product on history page and verify it
    





    Examples:
      | productName     | userName |
      | zara coat 3     | busrayusuf@gmail.com |
      | adidas original | busrayusuf@gmail.com |
      | iphone 13 pro   | busrayusuf@gmail.com |






