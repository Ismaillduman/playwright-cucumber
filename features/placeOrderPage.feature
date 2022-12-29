Feature: Place Order page
    Feature Description: verify user mail and select to the country

  @regression @placeOrder
  Scenario Outline: From dashboard page  add the product to the cart.
    Given user logged with '<userName>', '<password>' and add a product '<productName>' inside the cart
    Then check to the correctness of the user Email '<userName>' on the Cart Page
    Then user should be able select '<countryCode>' , '<country>' the country
    Then user should be able to click place order button and verify the confirmation text '<text>'
    Then user can be able to navi to orders

    Examples: 
      | productName     | userName             | countryCode | country | text                    | password    |
      | zara coat 3     | busrayusuf@gmail.com | ind         | India   | Thankyou for the order. | HKNclb8318. |
      | adidas original | busrayusuf@gmail.com | ger         | Germany | Thankyou for the order. | HKNclb8318. |
      | iphone 13 pro   | busrayusuf@gmail.com | Be          | Belgium | Thankyou for the order. | HKNclb8318. |
