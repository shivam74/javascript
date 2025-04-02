// array

const myHeors = ["shaktiman", "naagraj"]
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)// new Array(4) --> it creates empty array of size 4 with single number
// console.log(myArr[1]);
// console.log(typeof myArr)//object
// console.log(typeof myArr2)// object


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)//adds an element to the beginning
//myArr.shift()// removes an element from the beginning

// console.log(myArr.includes(9));//returns true or false
// console.log(myArr.indexOf(3));// returns the index

const newArr = myArr.join()//join joins the elements of array separated by , and returns a string

//  console.log(myArr);// [ 9, 0, 1, 2, 3, 4, 5 ]
//  console.log(newArr);// 9,0,1,2,3,4,5


//slice, splice

 console.log("A ", myArr);//comma adds a space on between values   A  [ 9, 0, 1, 2, 3, 4, 5 ]
// console.log("A "+myArr) // it doesnot add any space 

const myn1 = myArr.slice(1, 3)

console.log(myn1);//[ 0, 1 ]

console.log("B ", myArr);//B  [ 9, 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//C  [ 9, 3, 4, 5 ]
console.log(myn2);//[ 0, 1, 2 ]


//slice(start, end) → Extracts a Portion of an Array and does not modify the array;

//splice(start, deleteCount, item1, item2, ...) → Modifies the Array
// can add, delete and replace items from the array
