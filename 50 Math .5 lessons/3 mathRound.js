/*global console, alert, prompt*/
/*
    Math Round Syntax  Math.Round(x)
*/
var n = Math.round(5.02); // work of math.round is to return to the number to  the nearest variable exemple 4.1 > 4; 2.6 > 3;                 10.2 > 10; 10.8 > 11 ; -9.2 > -9 ; -9.7 > -10 but if  the number is without don't work , exemple 5 > 5; 6 > 6
console.log(n);
var f = Math.round(-9.5); // -9.5 => -9
console.log(f);
console.log(Math.round(5.5));