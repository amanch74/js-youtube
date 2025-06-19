// Same Datatype

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// different datatypes

// console.log("2" > 1);
// console.log("02">1);

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// The reason is that an equality check == and comparisons > < <= and >= works differently.Comparisons convert null to a number , treating as 0. Therefore, anwers are different.
// same thing will happen in undefined. but it will give always false value

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

// === triple equal to defines the strict check(checks value as well as data types)

console.log("3" == 3) // => true , because it converts the data type
console.log("3" === 3) // => false