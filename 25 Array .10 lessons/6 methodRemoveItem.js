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
matiers[4] = "English";

// first way to delete item from array is to use the "splice" use syntax : nameOfArray.splice(index, how many items do you want to delelte)
console.log(matiers); // will dispaly the array
console.log(matiers.length); // 5
matiers.splice(2, 1); // will delete "Informatique"
console.log(matiers); // will display the array
console.log(matiers.length); // 4 = 5 - 1
//------------------------------------------------------------------------------------
// Second way to delete item from array is to use the "pop()" use syntax : nameOfArray.pop() like this will delete last item
matiers.pop(); // will delete "English"
console.log(matiers); // will display the array
console.log(matiers.length); // 3 = 4 - 1
// with the pop you can display the last item from the array
/* use syntax : var = lastItem = nameOfArray.pop();
                console.log(lastItem) */
var lastItem = matiers.pop(); // will delete "Science"
console.log("The Last Item Is " + lastItem); // will display "Science"
// ---------------------------------------------------------------------------------------
// Thid Way to delete item form array is to use the "shift()" and it always delete the first item use syntax :  nameOfArray.shift()
matiers.shift(); // will delete "Math"
console.log(matiers); // will display the array
console.log(matiers.length); // 1 = 3 - 2
