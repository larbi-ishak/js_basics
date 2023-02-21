/*global console, alert, prompt*/
// 1 : .trim() -------------------------------
console.log("1 : .trim() -------------------");
var myString = "     I am Ishak Larbi    ",
    myNewString = myString.trim(); // .trim() is to delete the spaces
console.log(myString);
console.log(myNewString);
// 2 : .link -------------------------------
console.log("2 : .link() -------------------");
var myLink = "Google";
console.log("Go To Google By This Link" + myLink.link("https://www.google.com"));
document.getElementById("test").innerHTML = myLink.link("https://www.google.com");