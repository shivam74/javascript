// const tinderUser = new Object()// it calls the object construtor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }// it creates two objects inside as two properties into obj3
//                          { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2} // it copies the properties of obj1 and obj2 into obj3
//                               { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(obj3);


// Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//console.log(users[1].email)// h@gmail.com
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//it prints all keys
// console.log(Object.values(tinderUser));// it prints all values
// console.log(Object.entries(tinderUser));//it returns an array of  key-value pairs
//                                    [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course//insructor contains the value of courseInstructor from course object

//console.log(courseInstructor);// it is not a variable in this scope
console.log(course.courseInstructor);// hitesh
console.log(instructor);//hitesh

//JSON object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array of object in json format
[
    {},
    {},
    {}
]
