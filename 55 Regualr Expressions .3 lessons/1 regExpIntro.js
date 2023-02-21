/*global console, alert, prompt*/
/*
    Regular Expression Syntax ;
    /pattern/attributes
    uses : search | match | replace | test
    Attributes list :
    [ i ] => Case insensitive
    [ g ] => Global Search
    [ m ] => MultiLine Search
*/
var mo = String.fromCharCode(110005);
var string = "I Love Elzero web School",
    result = string.replace(/l/gi, mo);// if you don't put global "g" he will replace just the first l
console.log(result);