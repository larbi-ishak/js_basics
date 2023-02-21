/*global console, alert, prompt*/
function myDiscount(price) {
    "use strict";
    var discount = 200;
    return price - discount; // 500 - 200
}
document.getElementById("test1").innerHTML = myDiscount(500);// here the price will get the value 500 will display 300

// a calcuator
var a = prompt("donner a"),
    b = prompt("donner b"),
    prod = a * b;
document.getElementById("test2").innerHTML = "Le produit de " + a + " * " + b + " est " + prod;