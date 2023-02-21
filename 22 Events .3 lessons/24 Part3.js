/*global console, alert, prompt*/

var myDiv = document.getElementById("test1"),
    myDiv2 = document.getElementById("test2"),
    myValue = document.getElementById("input"),
    myDiv3 = document.getElementById("test3"),
    myDiv4 = document.getElementById("test4"),
    myGrp = document.getElementById("optgrp");



myDiv.onmouseover = function f1() {
    "use strict";
    myDiv.innerHTML = "You Hovered And Activated 'Onmousedown'";// Onmouseover
};

myDiv2.onmouseout = function f2() {
    "use strict";
    myDiv2.innerHTML = "You Have Gone and Activated \"Onmouseout\"";// Onmousedown
};
myValue.onkeydown = function f3() {
    "use strict";
    myDiv3.innerHTML = myValue.value * 22;
};
myGrp.onchange = function f4() {
    "use strict";
    myDiv4.innerHTML = "You selected " + myGrp.value;// on change the option he will display this
};