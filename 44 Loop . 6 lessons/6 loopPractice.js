/*jslint plusplus : true, evil : true*/
/*global console, alert, prompt*/
var v, f;
console.log("First For : -------------");
for (v = 5; v <= 15; v++) {
    if (v === 10) {
        continue; // so he won't display 10 and complete printing the loop
    }
    console.log(v);
   
}
console.log("Second For : -------------");
for (f = 10; f <= 20; f++) {
    if (f === 17) {
        break; // when f = 17 will stop the loop
    }
    console.log(f);
}
var myCar = {
    company : "Merecedes-Benz",
    name    : "E-256",
    color   : "White",
    modul   : "2017"
},
    prop;
console.log("Properties Of My Car Are :");
for (prop in myCar) {
    if (myCar.hasOwnProperty(prop)) {
        
        console.log(prop + " => " + myCar[prop]);
    }
}
console.log("\"While & Do While\"");
console.log("\"While\"");
var a = 3,
    b = 12;
while (a <= 7) {
    console.log(a);
    a++;
}
console.log("\"Do While\"");
do {
    console.log(b);
    b--;
} while (b >= 5);