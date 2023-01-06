Feature: Review the current product on the order history and verify the product 
    Feature Description: user should be able to choose current product on history page and verify it

  @regression @history
  Scenario Outline: Review the current product on the order history and verify the product 
   
    Given user logged with '<userName>', '<password>', add a '<productName>' inside the cart and I filled out '<countrycode>', '<countryName>' at the placeorder page and i see the '<expectedText>' text.
    When user should be able to choose current product on 'history page'
    Then  user should be able to verify current product

    Examples: 
      | productName     | userName             | countrycode | countryName |password| expectedText|
      | zara coat 3     | busrayusuf@gmail.com | ind         | India   |HKNclb8318.|Thankyou for the order.|
      | adidas original | busrayusuf@gmail.com | ger         | Germany |HKNclb8318.|Thankyou for the orde|
      | iphone 13 pro   | busrayusuf@gmail.com | Be          | Belgium |HKNclb8318.|Thankyou for the order.|
