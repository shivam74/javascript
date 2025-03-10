// Dates

let myDate = new Date() // Date() is an object
console.log(myDate.toISOString());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)// year month date hour minutes sec miliseconds
let myCreatedDate = new Date(2023, 0, 23, 5, 3)// month are started from 0 in javascript
let myCreatedDate = new Date("2023-01-14") // new format
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

 console.log(myTimeStamp);// o/p will be in miliseconds
console.log(myCreatedDate.getTime());// time in seconds
console.log(Math.floor(Date.now()/1000));//in seconds

 let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday : "long",
    hour :"numeric"
    // properties you can specify
})