/*global console, alert, prompt*/
var myString = "I Love \"JavaScript\" And 'Python' And \\PHP\\";

console.log(myString);
console.log("Length is : " + myString.length);

var mySearch = myString.indexOf("And", 7),
    my2ndSearch = myString.lastIndexOf("Love", 35),
    my3rdSearch = myString.search("JavaScript"),
    mySplit     = myString.split(" ", 3),
    mySlice     = myString.slice(2, 25),
    myChar      = myString.charAt(5), // to find what is the letter in the index 5 
    myCharCode  = myString.charCodeAt(5), // to find the code of the letter which is in the index 5
    myModString = myString.replace("P", "s"), // to replace the "P" by "s" so "python"" will be "sython"
    myConString = myString.concat(" And C#");

console.log("Index of \"And\" is        : " + mySearch + "     => using .indexOf()");
console.log("Index of \"Love\" is       : " + my2ndSearch + "      => using .lastIndexOf()");
console.log("Index of \"JavaScript\" is : " + my3rdSearch + "      => using .search()");
console.log(mySplit);
console.log("My Slice is : " + mySlice);
console.log("The Letter In the index 5 is : " + myChar);
console.log("The Unicode of the letter which is in the index 5 \"" + myChar + "\" is : " + myCharCode);
console.log(myModString.toLowerCase());
console.log(myConString.toUpperCase());
//-------------------------------------
console.log("----------------------------------------------------------");

var myNumber = 2651,
    myString = myNumber.toString();

console.log(myNumber);
console.log(myString);
// -------------------------------------------------------
var mySentence = "    Larbi ishak is learning javascript    ",
    myTrimSentence = mySentence.trim(),
    myLinkSentence = mySentence.link("https://this a link ");
console.log(myTrimSentence);
console.log(myLinkSentence);
            