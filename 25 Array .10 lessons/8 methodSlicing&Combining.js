/*global console, alert, prompt*/

var matiers = []; /* Literal Way Syntax : var nameOfArray []:
                                          nameOfArray [0];
                                          nameOfArray [1];
                                          nameOfArray [2];
                                          nameOfArray [3]; */
matiers[0] = "Math"; // -7 index   // 0 index
matiers[1] = "Fizik"; // -6 index   // 1 index
matiers[2] = "Informatique"; // -5 index   // 2 index
matiers[3] = "Science"; // -4 index   // 3 index
matiers[4] = "English"; // -3 index   // 4 index
matiers[5] = "Arabic"; // -2 index   // 5 index
matiers[6] = "French"; // -1 index   // 6 index

// SLICING :

// to slice an array use syntax : var mySlicedArray = nameOfArray.slice(Start indexOfItem, End IndexOfItem); he won't print the end index item

var MySlicedArray = matiers.slice(1, 3), // he will print 1 index: "Fizik" and "Informatique" and he won't print 3 index "Science"
    my2ndSlicedArray = matiers.slice(-6, -1); // he can't take negative values -6 index is "Fizik" and he will print "Informatique" "Science" "English"                                                            "Arabic" and -1 index is "French" he won't print it
//-----------------------------------------------------------------------------------------------------------------
console.log(MySlicedArray);
console.log(my2ndSlicedArray);

//-------------------------------------------------------------------------------

// COMBINING :

var otherMatiers = ["Islamic", "Sport", "His-Géo", "Gestion"];

/* To combine 2 arrays use syntax : var = allArray = firstArray.concat(secondArray)
                                    console.log(allArray); */

var allMatiers = matiers.concat(otherMatiers); // you combined two arrays "matiers" and "otherMatiers" in one array "allMatiers"
console.log(allMatiers);

//-----------------------------------------------------------------------------------------------------
/* you can combine three arrays use syntax : var = allArray = firstArray.concat(secondArray, third Array)
                                             console.log(allArray); */
var other2ndMatiers = ["électrecite", "procédes"];

var finalMatiers = matiers.concat(
    otherMatiers,
    other2ndMatiers
); /* you combined three arrays "matiers" and "otherMatiers" and "other2ndMatiers"
                                                                                                    in one array "finalMatiers" */
console.log(finalMatiers);
