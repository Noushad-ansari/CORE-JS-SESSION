// constructor function
// function Person() {
//     this.name = 'John',
//         this.age = 23
// }

// // // create an object
// const person = new Person();
// const personTwo = new Person()

// // console.log(person.age)
// // console.log(person.name)
// console.log(personTwo.name)

// constructor function
function Person(userName, userAge) {
    this.name = userName;
    this.age = userAge

    this.greet = function() {
        console.log('hello');
    }
}

// create objects
const person1 = new Person("Rahul", 25); // object creation
const personTwo = new Person("sumit", 35); // object creation

console.log(person1.name + " " + person1.age)
console.log(personTwo.name + " " + personTwo.age)



// access properties
// console.log(person1.name); // John
// console.log(person2.age); // John