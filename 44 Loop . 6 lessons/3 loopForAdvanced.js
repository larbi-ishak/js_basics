/*jslint evil: true */
/*global console, alert, prompt*/
/*
var i;
for (i = 0; i <= 10; i += 1) {
    console.log(i);
}
*/
var i = 0;
for (;;) {
    if (i > 10) break;
    console.log(i);
    i = i + 1;
}

function generateyears(Start, End) {
    "use strict";
    // to create an document in the html's page use syntax : document.write("<p>")                                                                                                                document.write("</p>")
    var years = Start;
    document.write("<select>");
    for (;years <= End;) {
        document.write("<option>" + years + "</option>");
         years += 1;
    }
    document.write("</select>");
    
}
generateyears(1997, 2020);
generateyears(2003, 2020);