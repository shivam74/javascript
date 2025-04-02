const name = "hitesh"
const repoCount = 50

// // console.log(name + repoCount + " Value");

 //console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 // backticks ```` are used for string interpolation with ${} this syntax

const gameName1= "shivam" // type string 
const gameName = new String('hitesh-hc-com') // string object type object

// console.log(gameName[0]);
 //console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

//const newString = gameName.substring(0, 4)
//console.log(gameName.substring(0, 4));//hite
//
// const anotherString = gameName.slice(-8, 4) // output is empty as start is less than end
// const anotherString1= gameName.slice(-8,6)
// console.log(anotherString1);// h

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-')) // it replaces the first occurance of second substring in the string by first substring

console.log(url.includes('sundar'))// it returns true or false if the string contains the substring then true otherwise false

console.log(gameName.split('-'));// [ 'hitesh', 'hc', 'com' ]// it makes the array by splitting with -
console.log(gameName.split('-')[1]);// hc  // it returns the value at index 1 in the array