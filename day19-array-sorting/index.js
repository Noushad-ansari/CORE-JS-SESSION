var array = [40, 100, 1, 5, 25, 10];
console.log(array.sort(function(a, b) {
    return a - b
}))
console.log(array.sort(compareFunction))

function compareFunction(a, b) {
    return a - b
}