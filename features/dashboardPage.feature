Feature: Dashboard Page

    Feature Description: user should be able to add the selected product  to the cart
    @regression @dashboard
    Scenario Outline: From dashboard page  add the product to the cart.

        Given User should be able to open dashboard Page
        When user should be able to add the selected product '<productName>' to the cart
        Then  user can be able to navi to chart page

        Examples:
            | productName     | userName             |
            | zara coat 3     | busrayusuf@gmail.com |
            | adidas original | busrayusuf@gmail.com |
            | iphone 13 pro   | busrayusuf@gmail.com |
