/*global console, alert, prompt*/

var myVar = "Ishak Larbi";// 11 letters
console.log(myVar.length); // He will display 11 in the console because there are 11 letters
//-----------------------------------------------------------------------
myVar.length = 5;// You can't set length of string
var matiers = []; /* Literal Way Syntax : var nameOfArray []:
                                          nameOfArray [0];
                                          nameOfArray [1];
                                          nameOfArray [2];
                                          nameOfArray [3]; */
matiers[0] = "Math";
matiers[1] = "Fizik";
matiers[2] = "Informatique";
matiers[3] = "Science";

console.log(matiers.length); // Get Length : will display 4 because there is 4 in the array => to get the length use syntax console.log(varibale.length)
console.log(matiers); // will display the array 
matiers.length = 2; // Set length => to set the length use syntax : variable.length = length's number
console.log(matiers); // will display 2 "Math" and "Fizik" 



let m = 'you have all the right to take that with my pleasure ';
let t = m.split(' ');
console.log(t);
for(i=0; i<t.length ; i++){
    
    g = t[i][0];
    t = t.toString();
    g.css.textTransform = 'uppercase';
    t = t.split(' ');
}
l= t.join(' ');
console.log(l);