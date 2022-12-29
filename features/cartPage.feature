Feature: Cart page

    Feature Description:
    @regression @Cart
    Scenario Outline: From dashboard page  add the product to the cart.

        # Given User should be able to open dashboard Page
        # When user should be able to add the selected product '<productName>' to the cart
        # Then  user can be able to navi to chart page
        Given user logged with '<userName>', '<password>' and a '<productName>' inside the cart.
        Then  user check to  the correctness of the product '<productName>' on the Cart Page
        Then user click checkout button


        Examples:
            | productName     | userName             | password|
            | zara coat 3     | busrayusuf@gmail.com |HKNclb8318.|
            | adidas original | busrayusuf@gmail.com |HKNclb8318.|
            | iphone 13 pro   | busrayusuf@gmail.com |HKNclb8318.|

           