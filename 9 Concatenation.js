// Concatenation

// var my age = "my age" + "17" // will print "my age17"
// var my age = "my age" + 17 // will print "my age 17"
// var my age = 17 + 12 + "my age"// will print "29my age"
// var my_age = "my age" + 17 + 12 // will print "my age1712"
// var my age = 5 + 10+ "my age" + 17 + 12 // will print "15my age1712"
// var my age = 5 + 10+ "my age" + (17 + 12) // will print "15my age29"
var myAge = 5 + 10 +  "myAge" + (17 + 12);

document.getElementById("test1").innerHTML = myAge + "<p style='color:aqua'>this aqua</p>";