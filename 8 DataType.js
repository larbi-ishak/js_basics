/* Data types
    Boolean : true, False ;
    Array : ["value 0", "value 1", "value 2"];
    Object : { firstName : "Larbi" , lastName : "Ishak"};
    String : "text";
    Number : 23
*/
var is = true,
    ha = ["value0", "value1", "value2"],
    km = {firstName : "Larbi", lastName : "Ishak", oldName : "PEAKY BLINDER"},
    la = " Thommas Shelbey",
    y = '5',
    x = 23,
    z=x+y;

if(is === true) {
    console.log("true");
}
else {
    console.log("false");
}
console.log(z);
document.getElementById("test1").innerHTML = is;
document.getElementById("test2").innerHTML = ha[0];
document.getElementById("test3").innerHTML = km.oldName;
document.getElementById("test4").innerHTML = la;
document.getElementById("test5").innerHTML = x;