// var array = [40, 100, 1, 5, 25, 10];
// console.log(array.sort())

// using call back function (annonymouse function)
// console.log(array.sort(function(a, b) {
//     return a - b
// }))

// // 2nd method
// console.log(array.sort(compareFunction))

// // named functiont
// function compareFunction(a, b) {
//     return a - b
// }

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return 0.5 - Math.random()});

// var randomValue = Math.round(Math.random() * 15);
// console.log(randomValue)

// fisher yates method
// var array = [40, 100, 1, 5, 25, 10];

// for (i = array.length - 1; i > 0; i--) {
//     j = Math.floor(Math.random() * i)
//     k = array[i]
//     array[i] = array[j]
//     array[j] = k
// }
// console.log(array)

// var points = [40, 100, 10, 5, 25, 10];
// points.sort(function(a, b) { return a - b });
// console.log(points)
// console.log("Lowest value " + points[0])
// console.log("highest value " + points[points.length - 1])

// function getName() {
//     console.log("hello")
// }
// getName()

// find min value
// var points = [40, 100, 3, 5, 25, 2, 10];

// function myArrayMin(arr) {
//     return Math.min.apply(null, arr);
// }

// var minValue = myArrayMin(points)

// console.log(minValue)

// find maxValue


var points = [40, 100, 3, 5, 25, 200, 2, 10];

// function myArrayMax(arr) {
//     var len = arr.length;
//     var max = -Infinity;
//     while (len--) {
//         if (arr[len] > max) {
//             max = arr[len];
//         }
//     }
//     return max;
// }
// var maxValue = myArrayMax(points)
// console.log(maxValue)


function myArrayMax(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
var minValue = myArrayMax(points)
console.log(minValue)