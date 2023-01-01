Feature: user should be able to select a product on the Dashboard Page
    Feature Description: user should be able to add the selected product  to the cart

  @regression @dashboard
  Scenario Outline: From dashboard page  add the product to the cart.
    Given User should be able to on the dashboard Page
    When user should be able to add the selected product '<productName>' to the cart
    And user can be able to navi to chart page
    Then user should see the 'My cart'

    Examples: 
      | productName     | userName             |
      | zara coat 3     | busrayusuf@gmail.com |
      | adidas original | busrayusuf@gmail.com |
      | iphone 13 pro   | busrayusuf@gmail.com |
