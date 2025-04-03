
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName=> function reference
//sayMyName()=> function execution

// Parameters => valueswhich are in the function definition
// Arguments => values which are passed during fuction calling

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){// default parameter
    if(!username){//if (username=== undefined) undefined is treated as 0 in if condition
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1){//rest parameter used when no. of argument is not certain
    return num1                      //they must be the last parameter and they return rest of the argument as an array
}

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500,600))//[ 500, 600 ]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// function can have objects, arrays as parameters

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 800, 1000]));