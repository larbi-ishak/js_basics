/*global console, alert, prompt*/
/* 
    ( != )   : Not Equal 
    ( !==)   : Not Identical
    ( && )   : AND 
    ( || )   : OR
*/
var myPrice = 20,
    myVar   = 40,
    name    = "ishak",
    age     = 16;

if (myPrice !== 30) // he will display Good because the data type is the same even the value is different      
    {alert("Good Of Not identical")}
    else{alert("Bad")} 



// another exemple

if (myVar != 20) // he will display Yes because 40 != 20     
    {alert("Yes Of NOT equal")}
    else {alert("No")}


// another exemple

if (myVar == 40 && myPrice == 10)//he will display NO because myPrice 20 != 10 even the var's equal 40 == 40  "&&" must the 2 condditions are correct  
    {alert("Yes AND")}
    else {alert("No Of AND")}

// another exemple

if (name == "ishak" || age == 17 )// he will display Yes because name="ishak" 
    {alert("Yes Of OR")}
    else {alert("No")}