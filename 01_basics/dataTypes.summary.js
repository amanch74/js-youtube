// Types of data types

// 1. Primitive(Non - Reference type)
// 7 types --> String, Number, Boolean, Null, Undefined, Symbol, BigInt

// What does Dynamic Language mean? JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const temperature = null

let userEmail; // => undefined

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId); // => false

const bigNumber = 2423443423443242n // => n for bigInt

// 2. Non-Primitive(Reference type)
// Arrays, Objects, Functions

const heros = ["Shaktiman" ,"Doga", "Nagraaz"]

let myObj = {
    name : "Aman",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world")
}
console.log(typeof myObj)

/* data type of 

Function => function object 
null => object
Undefined => undefined
String => string 
Number => number 
Boolean => boolean
Object => object
*/