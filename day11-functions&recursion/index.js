// let greet = function() {
//     let a = "hello"
//     console.log(a)
// }

// greet();

// console.log(a); // hello


// var let const
// var a = undefined
//  a = 5
// console.log(a)

// var a = undefined
// a = 5
// console.log(a)
// var a




// // program to display value
// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
//     greet()
// }

// greet(); // hello
// console.log(b);



// Recursion
// program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

// function sayName(number) {
//     debugger
//     console.log("Sagar")

//     let newNum = number - 1
//     if (newNum > 0) {
//         sayName(newNum)
//     }

// }


// sayName(5)

// Question 1
// let sum = 0;

// // take input from the user
// let number = parseInt(prompt('Enter a number: '));

// while (number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);
// document.write(`The sum is ${sum}.`);

// // Question 2
// function sumTriple(x, y) {
//     if (x == y) {
//         return 3 * (x + y);
//     } else {
//         return (x + y);
//     }
// }
// console.log(sumTriple(10, 20));
// console.log(sumTriple(10, 10));



// Question 3
function test37(x) {
    if (x % 3 == 0 || x % 7 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));


// let number = 0

// while (number <= 15) {

//     if (number % 2 == 0) {
//         console.log(number + " is Even")
//     } else {
//         console.log(number + " is Odd")
//     }
//     number++
// }