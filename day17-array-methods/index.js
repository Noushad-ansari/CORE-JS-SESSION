// 1. toString & join method
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString())  // toString method
// console.log(fruits.join(" | "))  // join method


// 2.Push & Pop method
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits.push("papaya") // push method
// fruits.push("strawberry") // push method
// console.log(fruits)

// fruits.pop()
// fruits.pop()
// fruits.pop()
// console.log(fruits)

//3. Shift & unShift mehtod(it returns new array)
// unshift
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// console.log(fruits.length)
// fruits.unshift("papaya"); // the value of x is "Banana"
// console.log(fruits)
// console.log(fruits.length)

//shift method
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

// var fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits.length)
// console.log(fruits)
//     // fruits[3] = "hello"

// // fruits[4] = "Kiwi";
// // console.log(fruits)

// fruits[fruits.length] = "hello";
// console.log(fruits)

//delete operator
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)

// delete fruits[2];
// console.log(fruits)
// fruits[2] = "hello"
// console.log(fruits)

// //splice method

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
//     // fruits.splice(2, 0, "Lemon", "Kiwi");
//     // console.log(fruits)

// // splice method return deleted items
// var splicedElem = fruits.splice(2, 2, "Lemon", "Kiwi", "papaya");
// console.log(splicedElem)
// console.log(fruits)


// concatinating/merging two Arrays
// var myGirls = ["akansha", "kareena"];
// var myBoys = ["krishna", "neeraj", "sameer"];
// var myChildren = myGirls.concat(myBoys);
// console.log(myChildren)


//Slice method
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits)
// var slicedArray = fruits.slice(2);
// console.log(fruits)
// console.log(slicedArray)

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits)
var citrus = fruits.slice(1, 4);
console.log(citrus)