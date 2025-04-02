// singleton
// Object.create(prototype)//it inherits the properties of prototype object

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)// this notation used when properties have simple names
// console.log(JsUser["email"])// 1.Used when the property name has special characters, spaces, or is dynamic. 
// //                            ->2.Property name must be a string or a variable containing a string.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)// after freeze no changes are applied
//JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

 //console.log(JsUser.greeting());// it executes the function but does the function does not return anything 
 //                               so console returns undefined
 //console.log(JsUser.greetingTwo());// it executes the function but does the function does not return anything 
 //                               so console returns undefined
 JsUser.greetingThree = function(){   
    return `Hello JS user, ${this.name}`;// 
}
console.log(JsUser.greetingThree())//Hello JS user, Hitesh
