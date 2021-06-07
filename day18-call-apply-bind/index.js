// // call method`
// var employeeOne = {
//     fullName: "John Doe",
//     age: 24,
//     salary: 40000,
//     salaryHike(hikeAmount) {
//         this.salary += hikeAmount;
//     }
// };

// // console.log(employeeOne.salary)
// // employeeOne.salaryHike()
// // console.log(employeeOne.salary)

// var employeeTwo = {
//     fullName: "Sarah ",
//     age: 25,
//     salary: 60000,

// };

// // console.log(employeeTwo.salary)
// // employeeOne.salaryHike.call(employeeTwo, 30000);
// // console.log(employeeTwo.salary)

// // apply method
// // console.log(employeeTwo.salary)
// // employeeOne.salaryHike.apply(employeeTwo, [30000]);
// // console.log(employeeTwo.salary)

// // bind method 
// console.log(employeeTwo.salary)
// let hikeFunction = employeeOne.salaryHike.bind(employeeTwo, 10000);
// hikeFunction()
// console.log(employeeTwo.salary)