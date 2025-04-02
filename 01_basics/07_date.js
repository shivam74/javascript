// Dates

let myDate = new Date() // Date() is an object
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)// year month date hour minutes sec miliseconds
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)//YYMMDD month are started from 0 in javascript 05:03 AM
let myCreatedDate2 = new Date("2023-01-14") //                                    new format
let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()//time stamp since January 1, 1970 (UTC) in miliseconds

// console.log(myTimeStamp);// o/p will be in miliseconds
// console.log(myCreatedDate.getTime());// timestamp till the specific date in miliseconds 
// console.log(Math.floor(Date.now()/1000));//in seconds

 let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`)

newDate.toLocaleString('default',{
    weekday : "long",
    hour :"numeric"
    // properties you can specify
})
console.log(newDate);