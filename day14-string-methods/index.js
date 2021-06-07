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

// //Second parameter
// var str = "aefdjdhesdjhfed";
// var pos = str.lastIndexOf("e", 6);
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

// var str = "       Hello World!        ";
// console.log(str.trim());


// Recommonded
// const name = "Rahul"
// const res = ("hello" + " world " + name)
// console.log(res)

// Most recomended,   "Template litral"
// const name = "rahul"
// console.log(`hello world ${name}`)

// not recommended
// console.log("Hello".concat(" ", "World!"))

// Converting a String to an Array
// var txt = "abdjfh|asfd adsjf|hdfj rahul c ,d, e"; // String
// // const strArray = txt.split(" ")
// console.log(strArray[2]); // Split on commas
// console.log(txt.split(" ")); // Split on spaces
// console.log(txt.split("|")); // Split on spaces


console.log(navigator.appCodeName) //Mozilla
console.log(navigator.appName) //Netscape
console.log(navigator.appVersion) //5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/90.0.4430.85 Safari/537.36
console.log(navigator.platform) //Win32
console.log(navigator.userAgent) //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36

console.log(navigator.productSub)