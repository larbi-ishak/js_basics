/*global console, alert, prompt*/
/*
    Full Format   
    Long Format   
    Short Format  
    Iso Format  ====>> "YYYY-MM-DD Hour:Min:Sec"
    Js Ignore Commas ","
    Js Month Insensitive
    [Month day Year] = [Day Month Year]
*/
var fullDate = new Date("April 06 2019 13:32:56"); // Full Format 
console.log(fullDate);
var longDate = new Date("Jun 07 2003 12:06:09"); // Long Format [Month Day Year]
console.log(longDate);
var shortDate = new Date("2003/06/07 15:28:31"); // Short Format [Month/Day/Year hours:minutes:seconds]
console.log(shortDate);
var isoDate = new Date("1997-08-11 08:46:01 +01:00"); // Iso Format "YYYY-MM-DD Hour:Min:Sec TZD" TZD => "Time Zone Designer""
console.log(isoDate);