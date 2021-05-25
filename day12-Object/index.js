// OBJECT
var car = {
    model: "500",
    name: "audi",
    color: "red"
}

// OBJECT ACCESS
// console.log(car.color + " " + car.name)
//     // console.log(car.color)

// OBJECT METHOD
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName())

// const person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function() {
//         console.log('hello')
//     }
// }

// person.greet(); // hello

const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname);
    }
};

console.log(person.name)
console.log(person.age)

person.greet();



// nested object
// const student = {
//     name: 'John',
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75,
//         activity: {
//             enviroment: 25,
//             sport: 50
//         }
//     }
// }
// console.log(student.marks.activity.sport)

// console.log("the age of student  " + student.age + " marks of student " + student.marks.science + " math marks" + student.marks.math)
// console.log(student.marks.activity.enviroment)