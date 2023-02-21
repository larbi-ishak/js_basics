

function info() {
    "use strict";
    var myName = "Larbi",
        myAge  = 17;
    return myAge + " " + myName;
    
}
var myfun = info();
document.getElementById("test1").innerHTML = myfun;