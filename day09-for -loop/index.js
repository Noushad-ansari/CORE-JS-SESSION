// var i = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }



// for (let i = 1; i <= 10; i++) {
//     debugger
//     // console.log(i)
//     i = i + 2
//     document.write(i)
// }

// // program to print the value of i
// for (let i = 1; i <= 5; i++) {
//     // break condition     
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }


// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {
    console.log('outer loop ' + i)

    // second loop
    for (let j = 1; j <= 3; j++) {
        console.log("Innerloop " + j)
    }
}