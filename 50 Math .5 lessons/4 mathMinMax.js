/*global console, alert, prompt*/
/*
    Math min Syntax :  Math.min(value, value, value, value)
    Math max Syntax :  Math.max(value, value, value, value)
*/
var n = Math.min(5, 6, 7, 8); // work of math.min is to get the less number between the number you have entred exemple :      Math.min(5, 6, 7, 8) > 5
console.log(n);
var m = Math.max(5, 6, 7, 8); // work of math.max is to get the big number between the number you have entred exemple :      Math.min(5, 6, 7, 8) > 8
console.log(m);
var f = Math.min(5.2, 6.8, 7.3, 8.9),
    t = Math.max(5.2, 6.8, 7.3, 8.9);
console.log(" max est " + Math.ceil(t));
console.log(" min est"  + Math.floor(f));