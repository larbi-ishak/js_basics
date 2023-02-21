/*global console, alert, prompt*/
// this leson is to check an element if it's an array
var matiers = [];
matiers[0] = "Math";
matiers[1] = "Fizik";
matiers[2] = "Informatique";
matiers[3] = "Science";
//-----------------------------------------------------------------------------------------------------------------------
/* to check an element if it's an array 
1:
if (Array.isArray(nameOfArray)) { 
    console.log("Good This Is An Array");// will display this message in the console because nameOfArray is an array
} else {
    console.log("Good This Is An Array");// will display this message in the console because nameOfArray is  not an array
}


OR


2;
if (nameOfArray.constructor === Array) { 
    console.log("Good This Is An Array");// will display this message in the console because nameOfArray is an array
} else {
    console.log("Good This Is An Array");// will display this message in the console because nameOfArray is  not an array
}
*/

//-----------------------------------------------------------------------------------------------------------------------

if (Array.isArray(matiers)) {
    console.log("Good This Is An Array");// will display this message in the console because "matiers" is an array
} else {
    console.log("Bad This Is Not An Array");
}
//--------------------------------------------------------------------------------------------------------------------------
if (Array.isArray(matiers[2])) {
    console.log("Good This Is An Array");
} else {
    console.log("Bad This Is Not An Array");// will display this message in the console because "matiers[2] => "Informatique" is not an array
}
//---------------------------------------------------------------------------------------------------------------------
if (matiers.constructor === Array) {
    console.log("Good This Is An Array");// will display this message in the console because "matiers" is an array
} else {
    console.log("Bad This Is Not An Array");
}