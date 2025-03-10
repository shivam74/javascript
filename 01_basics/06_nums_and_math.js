// const score = 400
// // console.log(score);

// const balance = new Number(100)
// // console.log(balance);

// // console.log(balance.toString().length);
// // console.log(balance.toFixed(1));

// const otherNumber = 123.8966

// // console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  // it is an object it has many properties
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); //for round off
// console.log(Math.ceil(4.2));  
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // randomvalue x 0 <= x <1
console.log((Math.random()*10) + 1); // random value between 1(inclusive) and 9 (inclusive)
console.log(Math.floor(Math.random()*10) + 1); // random integer between 1(inclusive) and 9 (inclusive)
//
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// formula for getting random number between min and max