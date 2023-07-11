//**CODE 1: How we can pass an argument to the innner function

const sum = function (a) {
  return function (b) {
    return a + b;
  };
};
const cl = sum(5); // Argument 5 accept as parameter by the sum function and which returns inner function, NOW cl is a function
console.log(cl); // ƒ (b) {   return a + b;}
const ans = cl(6); // now this argument 6 accept as parameter from the inner function
console.log(ans); //11

// **CODE: 2 - Currying Pattern to pass arguments

const newsum = function (a) {
  return function (b) {
    return a + b;
  };
};
const newans = sum(5)(6); // here first 5 goes as argument and accept by the 'newsum' function when it returns to the inner function then
// 6 accept as an parameter by the inner function
console.log(newans); //11

// **CODE:3 - Converting Above code in to ES6 USing arrow function
const arrowSum = (a) => (b) => a + b;
const arrowAnswer = arrowSum(5)(6);
console.log(arrowAnswer); // 11

// **CODE:3- Practical Usage of currying

/**
 
 In this below code the price is fixed but the discounts are changing, we passed the paramter required for the outer function once and using that 
 only we are calling many discount functions as shown

 */
const PriceCalc = (price) => {
  return (dPer) => {
    return price * dPer;
  };
};
//getPrice();
const discountAmount = PriceCalc(300);
console.log(discountAmount(0.3));
console.log(discountAmount(0.5));
console.log(discountAmount(0.1));
