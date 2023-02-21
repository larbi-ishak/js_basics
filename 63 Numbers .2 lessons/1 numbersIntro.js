/*global console, alert, prompt*/
var g = document.body.childNodes[1],
    t = document.body.childNodes[3];
g.onkeyup = function () {
    'use strict';
    t.value = this.value;

};
var d = document.getElementById('list');
var i = 2003;

for (i; i < 2020; i = i + 1) {
    var f = document.createElement('li'),
        x = document.createTextNode(i);
    f.appendChild(x);
    d.appendChild(f);
}