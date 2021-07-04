// class person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getAge() {
//         console.log(this.firstName)
//     }
// }


// let personOne = new person("rahul", "sharma")
// let personTwo = new person("vaibhav", "soni")

// console.log(personOne)
// personOne.getAge()

// personTwo.getAge()



// class inheritance


class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());


// class person {
//     constructor(personFirstName, personLastName, personAge) {
//         this.firstName = personFirstName;
//         this.lastName = personLastName;
//         this.age = personAge
//     }
//     getAge() {
//         console.log(this.age)
//     }
// }

// // let personOne = new person("Rahul", "sharma", 25)
// // let personTwo = new person("ankur", "reddy", 23)
// // personOne.getAge()
// // console.log(personOne.firstName)
// // console.log(personTwo.lastName)


// class relative extends person {
//     constructor(personAge, gender) {
//         super(personAge);
//         this.gender = gender;
//     }

//     show() {
//         return this.getAge() + ', it is a ' + this.gender;
//     }
// }

// let personThree = new relative(25, "male")
// console.log(personThree.show())















// let x = {
//     firstName: "rahul",
//     lastName: "sharma",
//     getName() {
//         console.log(this.lastName)
//     }
// }
// x.getName()

// console.log(personOne.firstName)


// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }