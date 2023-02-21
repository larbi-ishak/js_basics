/*global console, alert, prompt*/
/*
    Splite Syntax : .splite( Separator, Limit )
    Slice Syntax  : .slice( Start, End )
    SubStr        : .substr( Start, Length )
    SubString     : .substring( Start, End )
*/
// 1 : Splite --------------------------------------------------------------------------
console.log("1 : Splite -------------------");
var myMainString = "I-Love-JavaScript And ",
    mySplittedString = myMainString.split("-", 2);

console.log(myMainString); // will display it like a string 
console.log(typeof (myMainString)); // String

console.log(mySplittedString); // will display like an array
console.log(typeof (mySplittedString)); // Object the splite return the string to array

// 2 : Slice -----------------------------------------------------------------------------
console.log("2 : Slice -------------------");
var my2ndString  = "I Love JavaScript And JSON",
    mySlicedString = my2ndString.slice(7, 22); // like this will will display "JavaScript And" 

console.log(my2ndString); // will display it like a string 
console.log(typeof (my2ndString)); // String

console.log(mySlicedString); // will display like an string
console.log(typeof (mySlicedString)); // String

// 3 : SubStr ---------------------------------------------------------------------------
console.log("3 : SubStr -------------------");
var my3rdString = "I Love JavaScript And JSON",
    mySubString = my3rdString.substr(7, 5); // will display 5 letters after the 7th seventh letter

console.log(mySubString); // will display like an string
console.log(typeof (mySubString)); // String

// 4 : SubString ---------------------------------------------------------------------------
console.log("4 : SubString -------------------");
var my4thString = "I Love JavaScript And JSON",
    mySubStringedString = my4thString.substring(5, 25); // it runs like the slice and will display 5th letter to 25th letter 

console.log(mySubStringedString); // will display it like a string 
console.log(typeof (mySubStringedString)); // String