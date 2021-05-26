// const student = {

//     // data property
//     firstName: 'Monica',

//     // accessor property(getter)
//     get getName() {
//         return this.firstName;
//     }
// };

// // accessing data property
// // console.log(student.firstName); // Monica

// // accessing getter methods
// // console.log(student.getName); // Monica

// // trying to access as a method
// console.log(student.getName); // error



// Ist method / Regular method
// const student = {
//     firstName: 'Monica',

//     //accessor property(setter)
//     changeName: function(newName) {
//         this.firstName = newName;
//         console.log(this.firstName) //rahul
//     }
// };


// console.log(student.firstName); // Monica

// console.log(student.changeName("rahul")); // rahul
// console.log(student.firstName); // rahul


// IInd method

// const student = {

//     // data property
//     firstName: 'Monica',

//     // accessor property(getter)
//     get getName() {
//         return this.firstName;
//     }
// };


// // accessing data property
// console.log(student.firstName); // Monica

// // accessing getter methods
// console.log(student.getName); // Monica

// // trying to access as a method
// console.log(student.getName()); // error


// JavaScript Setter
// const student = {
//     firstName: 'Monica',

//     //accessor property(setter)
//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah



// JavaScript Object.defineProperty()

const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get: function() {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set: function(value) {
        this.firstName = value;
    }
});
console.log(student.getName)
    // console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah