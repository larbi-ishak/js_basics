/*global console, alert, prompt*/
/*
    .toString() => Convert to String
    .toExponential() => ne+n
    .toFixed() => like the Math.round()
    parseInt() => Convert Srting to Number 
*/
var num1 = (120),
    convertedNum1 = num1.toString(),
    ExponenNum1 = num1.toExponential();
console.log(num1); // Number
console.log(typeof (num1));
console.log(convertedNum1); // String
console.log(typeof (convertedNum1));
console.log(ExponenNum1); // will display 1.2e+2 =>  means 1.2 * (10 * 10) exemple 1500 > 1.5e+3 
console.log(typeof (ExponenNum1)); // => String
console.log((19000).toExponential()); // => 1.9e+4
console.log((456).toExponential()); // => 4.56e+2
console.log((4.2).toFixed()); // 4 
console.log((4.6).toFixed()); // 5
console.log((-4.2).toFixed()); // -4 
console.log((-4.7).toFixed()); // -5
console.log((4.28).toFixed(1)); // 4.3
console.log((4.283).toFixed(2)); // 4.28 
var string = "120cm",
    srtign = "905 Hello";
console.log(parseInt(string));
console.log(parseInt(srtign));