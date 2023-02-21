/*global console, alert, prompt*/

var myNumber = 345,
    myString = myNumber.toString();
console.log(myNumber); // 345 number
console.log(myString); // 345 string*/
var myNewNumber = myString.replace(5, 6); // to replace 5 by 6 and number will be 346
console.log(myNewNumber); // 346
var myLastNumber = myNewNumber.split("");
console.log(myLastNumber); // will display the number like an array

var myNumber = 345,
    myString = myNumber.toString().replace(5, 6).split("");
console.log(myNumber);
console.log(myString);