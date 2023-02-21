/*global console, alert, prompt*/
var myBtn2 = document.getElementById("btn"),
    myBtn = document.getElementById("btn2");
myBtn2.onkeydown = function button() {
    "use strict";
    console.log("you keydown on the input");
};
myBtn.onkeyup = function button1() {
    "use strict";
    console.log("you up on the input");
};
// myBtn2.onkeypress = function button2() {
//     "use strict";
//     console.log("you pressed on the input");
// };
// ********** keypress is deprecated *******
