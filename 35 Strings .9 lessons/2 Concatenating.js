/*global console, alert, prompt*/

var myLetter = String.fromCharCode(76, 65, 82, 66, 73, 32, 73, 115, 104, 97, 107); // wih unicode charachters look to the picture behind the file of                                                                                                                        html
/* to write a string with the Unicode Charachters use syntax : nameOfString = String.gromCharCode(Num1, Num2, Num3, Num4) */
console.log(myLetter); // will display LARBI Ishak
// Concatenating
var myFirst = "I Love JavaScript",
    mySecond = "PHP",
    myAll = myFirst.concat(" And ", mySecond, " And Python");
console.log(myAll); // will display "I Love JavaSript and PHP And Python"
/* to concatenate tow strings use syntax : myAll = myFirstString.concat(" ", mySecondString); and you can write strings inside the concatenating */