/*global console, alert, prompt*/

var x = 2;

function parent() {
    "use strict";// it's global to child()
    var x = 6;
    console.log(x);
    (function child() {
        var calc = x + 3;// calc = 6 + 3 = 9
        console.log(calc);
    }());// here we did a self invoke // will display 9 in the console beacause he took "x = 6" from parent()
}

//________________________________________________________________________________

parent();// Here will display 6 in the console because in parent() [local] x = 6  

//--------------------------------------------------------------------------------

console.log(x); // will display 2 in the console because the global is x = 2