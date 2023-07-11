//Code:1

const myFunction = (...args) => {
  console.log(args); // Array of arguments
};

myFunction(1, 2, 3); // Output: [1, 2, 3]

//Code: 2

const oldArray = [1, 2, 3];
const newArray = [...oldArray]; // This spreads out the elements of "oldArray" into the new array "newArray".

console.log(newArray); // Output: [1, 2, 3]

//Code: 3

/*You can also use the spread operator to combine multiple arrays or add additional elements to the new array. Here's an example:*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray1 = [...array1, ...array2, 7, 8];

console.log(newArray1); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//Code: 4

/*Here's an example of a function that can take any number of parameters and returns their sum:*/

function calculateSum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(calculateSum(1, 2, 3)); // Output: 6
console.log(calculateSum(4, 5, 6, 7, 8)); // Output: 30
console.log(calculateSum(9, 10)); // Output: 19
