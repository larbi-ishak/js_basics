/*jslint plusplus : true, evil : true*/
/*global console, alert, prompt*/

/*
    While Syntax :
    While (Condition) {
    // The Code 
    };
    
    While Do Syntax :
    Do{
    // The Code
    } While (Condition);
    ********  The difference between "While" And "Do While" is that "Do While" Execute the code once even the conddition is false but "While" don't execute the code if the conddition is false   
*/
console.log("While Exemple");
var i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}
// Exemple Of while on Do While
console.log("While Do Exemple");
do {
    console.log(i);
    i++;
} while (i <= 10);
// Exemple of For Advanced on while :
document.write("<p>" + "Exemple Of While" + "</p>");
function generateyears(Start, End) {
    "use strict";
    // to create an document in the html's page use syntax : document.write("<p>")                                                                                                                document.write("</p>")
    var years = Start;
    document.write("<select>");
    while (years <= End) {
        document.write("<option>" + years + "</option>");
        years += 1;
    }
    document.write("</select>");
    
}
generateyears(1990, 2019);
generateyears(1980, 2019);

// Exemple of For Advanced on Do While :
document.write("<p>" + "Exemple Of Do While" + "</p>");
function generateyears(Start, End) {
    "use strict";
    // to create an document in the html's page use syntax : document.write("<p>")                                                                                                                document.write("</p>")
    var years = Start;
    document.write("<select>");
    do {
        document.write("<option>" + years + "</option>");
        years += 1;
    } while (years <= End);
    document.write("</select>");
    
}
generateyears(2000, 2015);
generateyears(2005, 2020);