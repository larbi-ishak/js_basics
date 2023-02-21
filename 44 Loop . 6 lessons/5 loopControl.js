/*jslint plusplus : true, evil : true*/
/*global console, alert, prompt*/

var i;
//  break;
console.log("First For");
for (i = 0; i <= 10; i++) {
    if (i === 5) {break; } // like this will stop printing numbers in number 4 because here i === 5 so do the break;
    console.log(i);
}
// continue ;
console.log("Second For");
for (i = 0; i < = 10; i++) {
    if (i === 5) {continue; }// like this nothing won't print 5 because here i === 5 and after will continue;
    console.log(i);
}
// label;
console.log("Third For");
var m, n;
MainLoop :
for (m = 1; m <= 5; m++) {
    ChildLoop :
    for (n = 15; n <= 20; n++) {
        if (n === 17) {
            break ChildLoop;
        }
        console.log(m + "=> " + n);
    }
}