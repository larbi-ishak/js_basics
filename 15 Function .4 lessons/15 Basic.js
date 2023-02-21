/*global console, prompt, alert*/
function sayHi() {
    "use strict";
    var myName = prompt("What's your name?");
    if (myName === "ishak") {
        alert("Hello " + myName);
    } else { alert("Yourn't ishak" + " Go out"); }
}