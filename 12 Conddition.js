/*global console, prompt*/
// If...Else
/* The Syntax 
    if(The Conddition)
    {if the conddition is true will do the instructions 1}
    else{if the conddition is false will do the instructions 2}
    
    if there are 3 condditions you use "elseif"
    if(The Conddition 1 )
    {if the conddition 1 is true will do the instructions 1}
    else if(conddition 2)
    {if the conddition 2 is true will do the instructions 2}
    else
    {if the condditions 1&2 are false will do the instructions 3}
*/
var age = prompt("What's Your Age?"),
    months = age * 12,
    days = age * 365,
    x= 5;
    hours = days * 24;

document.getElementById("test1").innerHTML = "Your age in months is " + months + " your age in days is " + days + " your age in hours is " + hours;


if (true == false ) {
    console.log("js is crazy");
}
else if  (1 >= 2){
    console.log("js is crazy1");
}
else {
    console.log("js is crazy2");
}