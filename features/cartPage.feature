Feature: user verify the product name on the Cart page

    Feature Description: the user should be able to see the selected product in the cart
    @regression @Cart
    Scenario Outline: On the cart page verify the product name.

       
        Given user logged with '<userName>', '<password>' and a '<productName>' inside the cart.
        Then  user check to  the correctness of the product '<productName>' on the Cart Page
        When user click checkout button
        Then user should be able to see the 'Place Order Page'


        Examples:
            | productName     | userName             | password|
            | zara coat 3     | busrayusuf@gmail.com |HKNclb8318.|
            | adidas original | busrayusuf@gmail.com |HKNclb8318.|
            | iphone 13 pro   | busrayusuf@gmail.com |HKNclb8318.|

           