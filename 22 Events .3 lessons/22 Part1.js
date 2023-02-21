/*global console, alert, prompt*/
/*window.onload = alert("this page's event onload");*/// onload the page 
/*document.getElementById("test1").onload = alert("this element's event onload"); // onload the element test1*/
function btn1() {
    "use strict";
    alert("this button's 1 event onclick");
} // onclick on the button 1

function btn2() {
    "use strict";
    alert("this button's 2 event ondblclick");
} // ondblclick on the button2

function btn3() {
    "use strict";
    alert("this button's 3 event onhover"); // onhover on the buuton 3
}
var m = document.getElementById('jo');
m.innerText = document.body.innerHTML;
console.log(document.title);
if (document.body.innerHTML.indexOf('<aside>') > -1) {
    console.log("Yes there is aside");
} else {
    console.log("No there is'nt aside");
}
var close = document.querySelector('.nt span');
function hide() {
    'use strict';
    close.parentElement.style.display = 'none';
}

close.onclick = hide; 
/*var inpu = document.body.childNodes[3];
inpu.onclick = function () {
    'use strict';
    var ty = document.body.childNodes[11];
    ty.focus();

};*/
var inp = document.body.childNodes[5];
var ty = document.body.childNodes[11];
ty.onclick = function () {
    'use strict';
    var ty = document.body.childNodes[11];
    ty.blur();

};


var ott = document.getElementById('eat'),
    power = document.getElementById('power'),
    mf = document.getElementById('m1'),
    mo = document.getElementById('m2');
ott.onclick = function () {
    'use strict';
    mf.style.display = 'none';
};
power.onclick = function () {
    'use strict';
    ott.addEventListener('click', function () {
        mo.style.display = 'block';
    });
};
var ku = document.getElementById('hei');
console.log(ku.clientHeight + 'px')