/*jslint plusplus : true*/
/*global console, alert, prompt*/
/*
    
    For loop syntax : 
    for ( Initialization; Condition; Final Expression ) { 
        
        // Statemet
    
    }
    
    Initialization    : Executed Before The Code Once
    Condition         : Define The Condition To Run The Loop 
    Final Expression  : Exzcuted Everytime The Code Run
*/
var x, i, n;
for (x = 1; x <= 15; x++) { // Don't Use x++ Use => x += 1 or x = x + 1 or if you to use x++ use the comment /*jslint plusplus :                                                    true*/ in the first of the file  
    console.log(x);
}
console.log("Second For--------------------------------");
for (i = 15; i >= 1; i = i - 1) {
    console.log(i);
}
console.log("Third For--------------------------------");
for (n = 1; n <= 15; n = n + 2) {
    console.log(n);
}
console.log("Fourth For--------------------------------");

var freinds = [
    "Ishak",
    "Mohamed",
    "Larbi",
    "Younes"
], f;
for (f = 0; f < freinds.length; f += 1) {
    console.log(freinds[f]);
}
