// var x = "John";
// var x = new String("john");
// var y = new String("john");

// console.log(typeof(y))
// console.log(typeof(x))

//Q. what is the differnce between == & ===??
// console.log(x == y)

// console.log(x === y)

// quiz
// var txt = "Hello World!";
// var x =
//     txt.length;
// console.log(x)



// String Methods
// 1. indexOf()
// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// console.log(pos)

//Second parameter
// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate", 15);
// console.log(pos)

// 1. lastIndexOf()
// var str = "Please locate where 'locate' occurs locate!";
// var pos = str.lastIndexOf("locate");
// console.log(pos)

//Second parameter
// var str = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf("locate", 15);
// console.log(pos)


// Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

// slice(start, end)
// var str = "Apple, Banana, Kiwi";
// var res = str.slice(7, 13);
// console.log(res)


// substring(start, end)
// var str = "Apple, Banana, Kiwi";
// var res = str.substring(7, 13);
// console.log(res)


// substr(start, length)
// var str = "Apple, Banana, Kiwi";
// var res = str.substr(7);
// console.log(res)


// replace() method 
// str = "Please visit Microsoft!";

// var n = str.replace("Microsoft", "W3Schools");
// console.log(n)
// console.log(str)


// toUpperCase() method:
// var str = "Please visit Microsoft!";
// var res = str.toUpperCase()
// console.log(res)

// toLowerCase()
// var str = "PLEASE VISIT MICROSOFT!"
// var res = str.toLowerCase()
// console.log(res)

var str = "       Hello World!        ";
console.log(str.trim());