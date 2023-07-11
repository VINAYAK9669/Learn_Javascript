//     NaN can appear in JavaScript under various circumstances, such as:

// 1. Division by zero:

let result = 0 / 0;
console.log(result); //NaN

// 2.Invalid arithmetic operations:

result = "a" / 1;
console.log(result); // NaN

// To check if a value is NaN, you can use the "isNaN()" function or the "Number.isNaN() method.

result = isNaN("abc");
console.log(result); // true

result = Number.isNaN("abc");
console.log(result); // false

let a = NaN;
let b = NaN;

console.log(a == b); // false  >> we may understand that NaN are not same

console.log(a != b); // true

console.log(a === b); // false

console.log("USING isFinite()=" + isFinite(a));
