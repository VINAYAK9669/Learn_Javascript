//============================================Question 1 demonstration=================================

let x;
console.log(x); // undefined
console.log(typeof x); // undefined

//Now we initialize the variable with a number
x = 10;
console.log(typeof x); // number

//Now we initialize the variable with a string
x = "Vinayak Kittad";
console.log(typeof x); //string

// Now assigning the value of the variable as 'null'
x = null;
console.log(typeof x); // object
console.log(typeof typeof x); //String

const arr = [null];
console.log(typeof arr); // object
console.log(typeof typeof arr); //String
console.log("The length of the array is " + arr.length);

//=============================================Question 2 demonstration=========================================

let result = undefined == null;
console.log(result); // true

result = undefined === null;
console.log(result); //false
