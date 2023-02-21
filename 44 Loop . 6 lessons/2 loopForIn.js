/*global console, alert, prompt*/

/*
    
    For In Syntax : 
    for ( Variable In Object; ) {
        if (Object.hasOwnPropery(Variable)) {
        
            // The Code
        }
    }
    
*/
var myCar = {
    type: "RangeRover",
    price: "500.000 $",
    coulour: "Black",
    modul: "2022"
};
console.log(myCar.type);
console.log(typeof (myCar.type));

var prop;
for (prop in myCar) {
    
    if (myCar.hasOwnProperty(prop)) {
    
        console.log(prop + ": " + myCar[prop]);
    
    }
}