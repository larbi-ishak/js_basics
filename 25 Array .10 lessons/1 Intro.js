/*global console, alert, prompt*/

var matiers = []; /* Literal Way Syntax : var nameOfArray []:
                                          nameOfArray [0];
                                          nameOfArray [1];
                                          nameOfArray [2];
                                          nameOfArray [3]; */
matiers[0] = "Math";
matiers[1] = "Fizik";
matiers[2] = "Informatique";
matiers[3] = "Science";


var matiers = [ // or You can use this way the both are correct 
    "Math",// 0 index
    "Fizik",// 1 index
    "Informatique",// 2 index
    "Sciences"// 3 index
];
console.log(matiers);// will display in the console all the matiers
console.log(matiers[1]);// will display "Fizik" in the console
console.log(matiers[3]);// will display "Sciences" in the console
