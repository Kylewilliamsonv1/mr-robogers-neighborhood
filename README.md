#### _The Robotic language Synthesizer_

#### By _**Kyle Willimaosn**_

## Technologies Used

* _Javascript_
* _jQuery_
* _Bootstap_
* _HTML_

## Description

_This application will take in integers and output an array that replaces integers 1, 2, 3.  This is a basic application that demonstrates my ability to utilize a for loop_

## Setup/Installation Requirements

* _Clone repository from github.com_
* _Open folder titled 'mr-robogers-neighborhood'_
* _Open index.html file_

_To run this application on their local station the user will need to first clone the repository from github.com.  Once the file is accessible, the user will need to open the folder up and access the html file which will then begin the program._

## Known Bugs

* _Results button must be clicked twice to populate return_


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

_{kylewilliamsonv1@gmail.com}_ 

Describe: roboLanguage(8)

Test: It will return an array from 0 to their input number.
Code: roboLanguage(8)
Expected Output: [0,1,2,3,4,5,6,7,8]

Test: It will replace numbers with 1 to "Beep!"
Code: roboLanguage(1)
Expected Output: [Beep!]

Test: It will replace numbers with 2 to "Boop!"
Code: roboLanguage(2)
Expected Output: [Boop!]

Test: It will replace numbers with 3 to "Won't you be my neighbor!"
Code: roboLanguage(3)
Expected Output: [Won't you be my neighbor!]

Test: It will recognize multiple character strings that include 1 and replace them with "Beep!".
Code: roboLanguage(10)
Expected Output: [0, Beep!, Boop!, Won't you be me neighbor!, 4, 5, 6, 7, 8, 9, Beep!]

Test: It will recognize multiple character strings that include 1 and 2 and replace them with "Boop!". 
Code: roboLanguage(12)
Expected Output: [0, Beep!, Boop!, Won't you be me neighbor!, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!]

Test: It will recognize multiple character strings that include 3 and 1 or 2 and replace them with "Won't you be me neighbor!". 
Code: roboLanguage(13)
Expected Output: [0, Beep!, Boop!, Won't you be me neighbor!, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be me neighbor!]











