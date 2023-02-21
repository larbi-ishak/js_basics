/*global console, alert, prompt*/

var matiers = []; /* Literal Way Syntax : var nameOfArray []:
                                          nameOfArray [0];
                                          nameOfArray [1];
                                          nameOfArray [2];
                                          nameOfArray [3]; */
matiers[0] = "Math";         // 0 index 
matiers[1] = "Fizik";        // 1 index   
matiers[2] = "Informatique"; // 2 index
matiers[3] = "Science";      // 3 index

/* to get the index of an item use synatx : var specialItem = nameOfArray.indexOf("nameOfItem");
                                            console.log(specialItem);*/
console.log(matiers);
var favouriteMatier = matiers.indexOf("Informatique", 1);// you can define place were he begin the search use syntax : .indexOf("Item", number of index)
console.log(favouriteMatier); // will display his index 2 
// and you can display it without calculating 
console.log(matiers[favouriteMatier]);
var matiers = matiers.join(" | ");
document.getElementById("array").innerHTML = "My Matiers Are : " + matiers;
var specialMatier = matiers.lastIndexOf("Math", 2); // it's the same like indexOf but he begin the search from the end
console.log(specialMatier); // will display 0 because the idex of the "Math" is 0 index
var special2ndMatier = matiers.lastIndexOf("Science", 2); // he won't find "Science because he begin the search from 2index to 0index but "Science"is 3
console.log(special2ndMatier); // will display -1 because he didn't find "Science"
//---------------------------------------------------------------------------------------------------
console.log("Another different array");
var freinds = [
    
    "Ahmed",    // 0 index
    "Hassan",   // 1 index
    "Adel",     // 2 index
    "Mohamed",  // 3 index
    "Imad",     // 4 index
    "Hind",     // 5 index
    "Sameh",    // 6 index
    "Hassan",   // 7 index
    "Zineb"     // 8 index
];
var specialFreind = freinds.indexOf("Hassan", 0); // if you have element repeted twice in the "indexOf" will choose the first
console.log(specialFreind); // will display the first "Hassan" which has the index 1 So will dispaly 1

var favourFreind = freinds.lastIndexOf("Hassan", 8); // if you have element repeted twice in the "lastIndexOf" will choose the last
console.log(favourFreind); // will display the last "Hassan" which has the index 7 So will dispaly 