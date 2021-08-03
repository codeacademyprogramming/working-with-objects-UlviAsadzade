"use strict"

// Task - 1 

// let user={
//     name: "Ulvi",
//     surname: "Asadzade",
// }

// console.log(user.name);
// user.name= "Zulfu";
// console.log(user.name);
// delete user.name;
// console.log(user.name);



/////////////////////////////////////////////////////////////////////////////////////////

// Task - 2

// let user={name:"Ulvi"};

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true;
// }

// console.log(isEmpty(user));




/////////////////////////////////////////////////////////////////////////////////////////

// Task - 3

// let salaries = {
//     Ulvi: 100,
//     Ismayil: 250,
//     Ilham: 190
// }

// function sumSalaries(obj) {
//     let sum = 0;
//  for (let key in obj) {
//      sum += obj[key];
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));;




/////////////////////////////////////////////////////////////////////////////////////////

// Task - 4

// let order = {
//     name: "Pizza",
//     price: 8,
//     count: 3,
// }

// function multiplyNumeric(obj){
//     for (const key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//           }
//     }
//     return obj;
// }

// console.log(multiplyNumeric(order));




/////////////////////////////////////////////////////////////////////////////////////////

// Task in class

// class CustomMath{
//     constructor(number){
//         this.number=number;
//     }

//     add(num){
//        this.number += num;
//        return this;
//     }

//     substract(num) {
//        this.number -= num;
//        return this;
//     }

//     divide(num) {
//         this.number /= num;
//        return this;

//     }

//     multiply(num) {
//         this.number *= num;
//        return this;

//     }
// }

// const num1 = new CustomMath(5);
// let x = num1.add(50).substract(15).divide(2).multiply(10);
// console.log(x);