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
console.log(matiers); // will dispaly it like the array 
// matiers = matiers.toString(); // Convert the array to string
console.log(matiers);// will display the array like a string
//----------------------------------------------------------------
/* matiers = matiers.join();// will display the array like a string like the up ".to
console.log(matiers);  */
matiers = matiers.join("|");// we use .join("|") or .join("\") or anything you want to separate between the elements of array like this math|fizik-....
console.log(matiers);
var moyens = [];
moyens[0] = "17.87";
moyens[1] = "18.81";
console.log(moyens);
moyens = moyens.toString();
console.log(moyens);