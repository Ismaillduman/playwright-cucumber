Feature: Order history page
    Feature Description: user should be able to choose current product on history page and verify it

  @regression @history
  Scenario Outline: From dashboard page  add the product to the cart.
   
    Given user logged with '<userName>', '<password>', add a '<productName>' inside the cart and I filled out '<countrycode>', '<countryName>' at the placeorder page and i see the '<expectedText>' text.
    And user should be able to choose current product on history page and verify it

    Examples: 
      | productName     | userName             | countrycode | countryName |password| expectedText|
      | zara coat 3     | busrayusuf@gmail.com | ind         | India   |HKNclb8318.|Thankyou for the order.|
      | adidas original | busrayusuf@gmail.com | ger         | Germany |HKNclb8318.|Thankyou for the order.|
      | iphone 13 pro   | busrayusuf@gmail.com | Be          | Belgium |HKNclb8318.|Thankyou for the order.|
