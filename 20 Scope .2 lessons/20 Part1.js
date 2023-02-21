/*global console, alert, prompt*/
/* function idr() { "use strict"; 
                var myName = "ishak" // this is a local scope 
                }
console.log(myName);// LIke this won't show myName in the console because it's not defined 
*/
var mName = "ishak global"; // this is a global scope 
function idr() {
    "use strict";
    var m1Name = "ishak local";// this is a local scope 
    return m1Name;
}
console.log(mName);
idr();

function scro() {
    'use strict';
    console.log(document.URL);
}
window.onresize = function () {
    'use strict';
    console.log('u r resizing');
};

document.oncontextmenu = function (m) {
    'use strict';
    console.log('you can\'t click right Here');
    m.preventDefault();
};