const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//push the whole array as an element -> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);//flash

const allHeros = marvel_heros.concat(dc_heros)// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//console.log(allHeros);

 const all_new_heros = [...marvel_heros, ...dc_heros]// spread operator 

//console.log(all_new_heros);

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// false 
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // Array.from() returns an array from itearble(like strings,maps)  ,since objects are not iterable

console.log(Object.values({name: "Hitesh" , age: 78})); // returns values as an array
console.log(Object.keys({name: "Hitesh" , age: 78}))// returns keys as an arrays

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// [ 100, 200, 300 ]