/*global console, alert, prompt*/
/* to invoke a function automatically use 


(function welcome(){
    "use strict";
    alert("You Are Welcome");
})();
________________________________________
Like This
(function welcome(){
    "use strict";
    alert("You Are Welcome");
})();
________________________________________
*/
(function welcome() {
    "use strict";
    alert("You Are Welcome");
}());

function convertion() {
    "use strict";
    var amount = document.getElementById("test1").value,
        result = amount * 220;
    if (amount > 0) {document.getElementById("test2").innerHTML = "The result is: " + amount + " £ = " + result + " DA"; }
    
}
(function tellMe() {
    confirm("y/n");
}());


