/*global console, alert, prompt*/
/*
    now() => get milliseconds from 1970 to now
    Parse("Specific Date") => get milliseconds from Specific Date to now 
    toISOString() => print the date in ISO Format
    toDateStrig() => change format 
    toTimeStrig() => display just the hour:min:second and dont dispaly the year & day & month
*/
var theDate = new Date(),
    now = Date.now(),
    min = 1000 * 60,
    hour = min * 60,
    day = hour * 24,
    month = day * 30.5,
    year = month * 12;
console.log(now); // get the milliseconds from 1970 to now
console.log(Math.round(now / year)); //50
console.log("-----------------------------------");
var myDate = new Date(),
    parse = Date.parse("Jun 07 2003 12:00:00"),
    min = 1000 * 60,
    hour = min * 60,
    day = hour * 24,
    month = day * 30.5,
    year = month * 12;
console.log(parse); // get milliseconds from 2003 "Specific Date"
console.log(Math.round(parse / year));
console.log("-----------------------------------");
var offDate = new Date(),
    myIso = offDate.toISOString(),
    stringDate = offDate.toDateString(),
    TimeDate = offDate.toTimeString();
console.log(offDate);
console.log(myIso); // to dispaly it by ISO Format
console.log(stringDate); // change Format
console.log(TimeDate); // change Format