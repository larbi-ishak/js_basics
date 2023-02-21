/*global console, alert, prompt*/
/*

    Syntax : .indexOf(Value, Starting Point and going to the end); Default : 0
    Syntax : .lastIndexOf(Value, Starting Point and going to the first); Default -1
    Syntax ! .search(Value)
*/
var myString = " LARBI Ishak Learning JavaScript",
    myWord    = myString.indexOf("JavaScript", 5), // will display 22 because "JavaScript" in the 23 twenty third letter
    my2ndWord = myString.lastIndexOf("Ishak", 25), // will display 7 because "Ishak" in the 7 seventh letter
    my3rdWord = myString.search(/learning/i);    // we used regular expression so he will find "Learning" and display if we used the old synatax without                                                                    regualr expression he won't find "Learning" because of the "L" 
console.log(myWord); // 22
console.log(my2ndWord); // 7
console.log(my3rdWord); // 13