/*global console, alert, prompt*/
/*
    setDate(day[Req]) 
    setFullYear(year[Req], month[InReq], day[InReq])
    setHours(Hour[Req], Minute[InReq], second[InReq], Milli[Inreq])
    setMinutes(Minutes[Req], seconds[InReq], Milli[Inreq])
    setSeconds(Seconds[Req], Milli[Inreq])
    setMilliseconds()
    setMonth(Month[Req], Day[InReq])
    Notice >>> there is UTC set
*/
var theDate = new Date("2003-06-07 11:35:59");
console.log(theDate);
theDate.setDate(2);

console.log(theDate); // will display 02 jun 2003
theDate.setDate(31); // If we put 31 in month contain 30  will display the first day from the next month so here will display                                                                                           01 07 2003
console.log(theDate);

theDate.setDate(0); // If we put 0 will display the last day from the last month so here will display 31 05 2003
console.log(theDate);
console.log("------------------------------------------------------");
var myDate = new Date("1997-08-11 08:02:56");
myDate.setFullYear(2003, 12); // 05 > juin ;06 > july ;07 > august ;08 > september and if we put 12 > jan 2004
console.log(myDate); // will dispaly 06 11 2003
console.log("------------------------------------------------------");
var lesDate = new Date("2005-08-08 22:41:55");
lesDate.setHours(21, -10, 3); // in hours : if we put 24 >00 but in 09-08-2005 ; in minutes if we put 60 > 22 or -1 > 59 in 20                         or -10>50 in 20
console.log(lesDate);
console.log("------------------------------------------------------");
var forDate = new Date("1968-04-03 11:02:33");
forDate.setMinutes(60, 1); // Like Explaining Of Hours and seconds
console.log(forDate);
console.log("------------------------------------------------------");
var upDate = new Date("1968-04-03 11:02:33");
upDate.setMilliseconds(6000); // 1000> 1second  60000>1m 600000>1h
console.log(upDate);//  will up 6s so will be 11:0239
console.log("------------------------------------------------------");
var MPDate = new Date("1968-04-03 11:02:33");
MPDate.setMonth(12); // 12 > 01 1969 ; -1 > 12 1967
console.log(MPDate);