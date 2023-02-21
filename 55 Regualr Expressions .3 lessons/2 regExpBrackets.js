/*global console, alert, prompt*/
/*
    Regular Expression Syntax ;
    /pattern/attributes
    uses : search | match | replace | test
    Attributes list :
    [ i ] => Case insensitive
    [ g ] => Global Search
    [ m ] => MultiLine Search
    Brackets Use :
    [...] Character
    [^...] Not Character
    [a-z] Range Small letters
    [A-Z] Range Big letters
    [0-9] Range Numbers
    [^5-9] Not Numbers In Range
    [A-g] => Range [A-Z] + Range [a-g]
    [0-9a-z]
*/
var string = "I Love Elzero web School",
    result = string.replace(/[e]/gi, "#"), // will replace e by #
    result2nd = string.replace(/[^o]/gi, "@"), // will return all the letters to @ sauf o
    result3rd = string.replace(/[a-e]/gi, "@"), // will return all the letter which are in the Range [a-e] and they are >a,b,c,d,e                                                                                                                  to @ 
    result4th = string.replace(/[A-Z]/g, "$"); // will return all the letters which are in the Range [A-Z] to $
console.log(result);
console.log(result2nd);
console.log(result3rd);
console.log(result4th);

//-----------------------------------------------------------
var myText = "0111123456789",
    myPhone = "0777209008",
    range = "AB XYZ abc de klm",
    contre = "123456789ABCDEFabcdef";
    der = myText.replace(/[^2-9]/gi, "%"); // will return all the numbers which are not in the range [2-9] to % 
    dar = myPhone.replace(/[^7-9]/gi, "§"); // will return all the numbers who are not in the range[7-9] to §
    fer = range.replace(/[A-g]/g, "?"); // will return all the letters which are in the range[A-g] to ?
    ber = contre.replace(/[0-9a-z]/g, "/"); // will return all the letters and numbers which are in the range[0-9a-z] to /
console.log(der);
console.log(dar);
console.log(fer);
console.log(ber);