/*global console, alert, prompt*/
/*
    Regular Expression Syntax ;
    /pattern/attributes
    uses : search | match | replace | test
    ______________________________
    Attributes list :
    [ i ] => Case insensitive
    [ g ] => Global Search
    [ m ] => MultiLine Search
    ------------------------------
    Brackets Use :
    [...] Character
    [^...] Not Character
    [a-z] Range Small letters
    [A-Z] Range Big letters
    [0-9] Range Numbers
    [^5-9] Not Numbers In Range
    [A-g] => Range [A-Z] + Range [a-g]
    [0-9a-z] Double Range
    -------------------------------
    Quantifiers ;
    letter+                  => Word Contain One Letter
    lerrer{number}           => word contain number of letter
    lerrer{number1, number2} => word contain number1 of letter or number 2 of letter
    lerrer{number, }         => word contain at least number of letter
*/
var string = "I Love Elzeero weeeb School",
    result = string.replace(/e+/gi, "#"),
    result2nd = string.replace(/e{3}/gi, "§"); // return the e by § when the word contain 3 e  here will return web to w§b
    result3rd = string.replace(/e{2, 3}/gi, "?"); // return the e to § when the word contain 2 or 3 e o here will return                                                                                      ELzeeero to Elz?ro and web to w?b
    result4th = string.replace(/e{2,}/gi, "/"); // return the e to / when the word contain at least 2 e here will return                                                                               Elzeeero to ELz/ro and weeeb to w/b
console.log(result);
console.log(result2nd);
console.log(result3rd);
console.log(result4th);