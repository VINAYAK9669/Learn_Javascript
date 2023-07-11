//CODE 1

function validateInfinity(number) {
  if (Number.isFinite(number)) {
    console.log("The number is finite.");
  } else if (number === Infinity) {
    console.log("The number is positive Infinity.");
  } else if (number === -Infinity) {
    console.log("The number is negative Infinity.");
  } else {
    console.log("Invalid input.");
  }
}

validateInfinity(10); // The number is finite.
validateInfinity(-5.5); // The number is finite.
validateInfinity(Infinity); // The number is positive Infinity.
validateInfinity(-Infinity); // The number is negative Infinity.
validateInfinity(NaN); // Invalid input.

// CODE 2

console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity

// CODE 3

console.log(9e4); //90000
console.log(-9e4); //-90000

//CODE 4

console.log(9e400); //Infinity
console.log(-9e400); //-Infinity

// CODE 5

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(-Number.MAX_VALUE); //-1.7976931348623157e+308

//Exceeding this maximum value can result in special values such as positive Infinity/-Infinity.

console.log(Number.MAX_VALUE * 2); //Infinity
console.log(-Number.MAX_VALUE * 2); //-Infinity
