/*global console, alert, prompt*/

var matiers = [];

matiers[0] = "Math"; // 0 index
matiers[1] = "Fizik"; // 1 index
matiers[2] = "Informatique"; // 2 index
matiers[3] = "Science"; // 3 index
console.log(matiers);
console.log(matiers.length); // 4
//------------------------------------------------------------------------
// to add an item to array use syntax : nameOfArray[indexOfItem] = "Item" ;
// first way 1:
matiers[4] = "Sport";
console.log(matiers); //will display the array
console.log(matiers.length); // 5
//---------------------------------------------------------------------------------------------
/* to make it easy to yourself and not everytime you want to add an item you to calculate the length you use this syntax :
nameOfArray[nameOfArray.length] = "item";*/
matiers[matiers.length] = "English"; // you added an item
console.log(matiers); //will display the array
console.log(matiers.length); // 6
//---------------------------------------------------------------------------------------
//second way 2:
// to add an item to array use syntax : nameOfArray.push("item");
matiers.push("Arabic"); // you added an item to the array it's "Arabic" and on this way he is the last index
console.log(matiers); //will display the array
console.log(matiers.length); // 7
//-------------------------------------------------------------------------------------
// to make the item in the begining of the undex use synatx : nameOfArray.unshift("item");
matiers.unshift("French"); // you added an item but it's in the begining of the array it's 0 index
console.log(matiers); // will display the array
console.log(matiers.length); // 8
//----------------------------------------------------------------------------
/*
    nameOfArray.splice(index, how many items do you want delelte, "item1", "item2", "item3".........)
*/
// EX 1:
matiers.splice(2, 0, "His-Géo"); // you added item "His-Géo" in the index 2 and didn't delete any item
console.log(matiers); // will display the array
console.log(matiers.length); // 9
// EX 2:
matiers.splice(4, 3, "Islamic"); // you added item "Islamic" in the index 4 you delete 3 items they are => "Informatique", "Science", "Sport"
console.log(matiers); // will display the array
console.log(matiers.length); // 7