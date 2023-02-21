/*global console, alert, prompt*/

var myNumber = 7,
    myArray = [
        "one",
        "two",
        "three"
    ];
// 1 : Check if it's an array
console.log("1 : checking if it's an array -----------");
if (Array.isArray(myArray)) {
    console.log("it's an array"); // will display it's an array
} else { console.log("it's not an array"); }

if (myNumber === Array) {
    console.log("it's an array");
} else { console.log("it's not an array"); } // will display it's not an array
//---------------------------------------------------------------------------------
// 2 : length 
console.log("2 : length ------------------------------");
var ishak = "Larbi ishak";
console.log(ishak);
console.log(ishak.length); // 11 letters
ishak.length = 9; // you can't set length of string 
console.log(ishak.length); // will display 11 
console.log(ishak); // will display normal "Larbi ishak"

var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
console.log(myMsg.length); // will display 4
console.log(myMsg); // will display the array
myMsg.length = 2;
console.log(myMsg.length); // will display 2
console.log(myMsg); // will display the array
//----------------------------------------------------------------------------------
// 3 : Convert to string
console.log("3 : Convert to string -------------------");
var myClasses = [
    "1am1",
    "2am2",
    "3am2",
    "4am2"
];
console.log(myClasses);
console.log(myClasses.join(" and ") + " this is with \".join(\" and \")\"");
myClasses = myClasses.toString();
console.log(myClasses + " this with \".toString()\"");

var myDate = new Date();
console.log(myDate);
console.log(myDate.toLocaleString() + " this with \".toLocaleString()\"");
//------------------------------------------------------------------------------------
// 4 : Add & Delete  Item to array
console.log("4 : Add & Delete Item from array --------");
var socialMedia = [
    "Facebook",    // 0 index and 1 in length
    "Instagram",   // 1 index and 2 in length
    "WhatsApp"     // 2 index and 3 in length
];
console.log(socialMedia);
socialMedia[socialMedia.length] = "SnapChat"; // To add item in the last
console.log(socialMedia);
socialMedia.push("Skype"); // To add item in the last
console.log(socialMedia);
socialMedia.unshift("TikTok"); // To add item in the first
console.log(socialMedia);
socialMedia.splice(1, 0, "Twitter");// syntax : nameOfArray.splice(number of starting index, number of elements how many you want to delete, "item1",                                                                                                                      "item2", "item3"..);
console.log(socialMedia);
console.log(socialMedia.pop()); // to delete and show the deleted item "Skype"
socialMedia.pop(); // to delete the last item "Snapcat"
console.log(socialMedia.shift()); // to delete and show the first item "TikTok"
console.log(socialMedia);
socialMedia.sort();
console.log(socialMedia);
console.log(socialMedia.reverse());
//------------------------------------------------------------
// another array 
console.log("another array to explain \".slice()\"");
var myNumbers = [
    1,  // 0 index and 1 in length
    2,  // 1 index and 2 in length
    3,  // 2 index and 3 in length
    4,  // 3 index and 4 in length
    5   // 4 index and 5 in length
];
console.log(myNumbers);
console.log(myNumbers.slice(1, 4)); // will display 2 & 3 & 4 
console.log(myNumbers);
var allArray = myClasses + " ".concat(socialMedia);
console.log(allArray);
// ------------ enter in array of socialMedia
console.log("Return to array socialMedia to explain \".indexOf\"");
console.log(socialMedia.indexOf("Instagram", 1)); // search the index of "Instagram" begining the search from index 1 and going to the end
console.log(socialMedia.lastIndexOf("WhatsApp", socialMedia.length - 1)); /* search the index of "WhatsApp" begining the search from index -1 which is the last element and going to the first */