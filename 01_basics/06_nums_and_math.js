const score = 400
// console.log(score); // 400

const balance = new Number(100)// object
//  console.log(balance);// [Number: 100]

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2)); // Rounds the number to a fixed number of decimal places.
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5));// 123.9 //Specifies the total number of significant digits, not just decimals.
// console.log(otherNumber.toFixed(3));//123.897
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000
// console.log(hundreds.toLocaleString('en-US'));//1,000,000
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  // it is an object it has many properties
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); //for round off
// console.log(Math.ceil(4.2));  
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
let array1= [4,6,93,3,98]
//console.log(Math.max(array1));//it throws an error
//console.log(Math.max(...array1));//spread operator spreads the array into individual elements


//  console.log(Math.random());  // randomvalue x 0 <= x <1
//  console.log((Math.random()*10) + 1); // random value between 1(inclusive) and 11 (exclusive)
// console.log(Math.floor(Math.random()*10) + 1); // random integer between 1(inclusive) and 10(inclusive)

const min = 11
const max = 15

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// formula for getting random number between min and max