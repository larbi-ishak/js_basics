/*global console, alert, prompt*/
/*
    getDate()           // Day Of The Month 1-31
    getDay()            // Day Of The Week 0-6  >>>>> Sunday > 0 ; Monday > 1 ; Tuesday > 2 .... Saturday > 6
    getFullYear()       // Get The Full Year 
    getHours()          // Get The Hours 0-23
    getMinutes()        // Get The Minutes 0-59
    getSeconds()        // Get The Seconds 0-59
    getMilliseconds()   // get The MilliSeconds 0-999
    getTime()           // Get The Millseconds From 1970 Or Specific Date 
    getTimezoneOffset() // Get The Defference Between Universale Time "GMT" > "UTC" And Local Time In Minutes 
    Notice : >>> all this fuction if we add UTC after get exemle >> getUTCDay and it will display it by the uinversal time
*/
var theDate = new Date("April 06 2019 13:32:56"),
    theDay = theDate.getDate(),
    the2ndDay = theDate.getDay(),
    theYear = theDate.getFullYear(),
    theHour = theDate.getHours(),
    theMinutes = theDate.getMinutes(),
    theSeconds = theDate.getSeconds(),
    theMilliSeconds = new Date().getMilliseconds(),
    theTime = new Date().getTime(),
    theTimeZone = new Date().getTimezoneOffset(),
    theUTC = theDate.getUTCHours();



//---------------------------------------------------------------
console.log(theDate);
console.log(theDay); // will display 6 because the date is 06 April 2019
console.log(the2ndDay + 1); // will display 7 because the date is Saturday > 6 and we put + 1
console.log(theYear); // 2019 will display the year 2019
console.log(theHour); // will display 13 
console.log(theMinutes); // will display 32 
console.log(theSeconds); // will display 56
console.log(theMilliSeconds); // will display the Milliseconds
console.log(theTime); // will display milliseconds passed from 1970 to Now date
console.log(theTimeZone); // will display the defference between UTC and local time in minutes so > -60
console.log(theUTC); // will display 12 because local time hour is 13 and deferrence between UTC and local time is -1
console.log("------------------------------------");

// Exemple to Calculat The Age : 
console.log("Exemple To Calculate The Age : ");

var AK47 = new Date("2003-06-07").getTime(),
    Age = new Date(AK47),
    Year = new Date().getFullYear(),
    Year2 = Age.getFullYear(),
    Year3 = Year - Year2;
console.log("Your Birth Date Is : " + Age);
console.log("This Year Is : " + Year);
console.log("The Year Of Your Birth Date is : " + Year2);
console.log("Your Age Is : " + Year3);