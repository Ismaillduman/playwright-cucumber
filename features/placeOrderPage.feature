Feature: The user should be able to enter the address and order the product on the Place Order page
    Feature Description:  select to the country and place order

  @regression @placeOrder
  Scenario Outline: select to the country and place order
    Given user logged with '<userName>', '<password>' and add a product '<productName>' inside the cart
    Then check to the correctness of the user Email '<userName>' on the Cart Page
    When user should be able select '<countryCode>' , '<country>' the country
    And user should be able to click place order button to confirm order
    Then usershould be able to verify the confirmation text '<text>'
    When user can be able to navi to orders
    Then the user should also see the 'Order History Page'

    Examples: 
      | productName     | userName             | countryCode | country | text                    | password    |
      | zara coat 3     | busrayusuf@gmail.com | ind         | India   | Thankyou for the order. | HKNclb8318. |
      | adidas original | busrayusuf@gmail.com | ger         | Germany | Thankyou for the order.   | HKNclb8318. |
      | iphone 13 pro   | busrayusuf@gmail.com | Be          | Belgium | Thankyou for the order. | HKNclb8318. |
