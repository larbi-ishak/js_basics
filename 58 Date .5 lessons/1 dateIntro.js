/*global console, alert, prompt*/
/*
    new Date(): // Print Current Item
    new Date(Milleseconds exemple  (5000 = 5s)  ): // Print Milleseconds from UTC 1 Jan 1970 00:00:00 =>Begining OF Unix System
    new Date(DateString exemple : Month day, year, hours:minutes:seconds): // Can Add Data String
    new Date(Yaer,Month,Day,Hours,Minutes,Seconds,Millseceonds)
    // Notice : >>>>>>>>     jan >00 ; fev>01 ; mar>02 ; apr > 03 .... dec > 11
*/
var myDate = new Date();
console.log(myDate);
var theDate = new Date(1000);
console.log(theDate);
var ofDate = new Date("Jun 07, 2003, 12:31:15");
console.log(ofDate);
var preDate = new Date(2019, 3, 5, 22, 37, 56, 500);
console.log(preDate);