//TODO         CODE 1: syntactical features of arrow function

// Traditional function expression
let regularSum = function (a, b) {
  return a + b;
};

console.log("Regular Function = " + regularSum(9, 10));

// Arrow function expression
let arrowSum = (a, b) => a + b; // Here we omitted keywords like 'funtion', 'return' and syntax '{}; For single expression we can do this
console.log("Arrow Function = " + arrowSum(9, 10));

// TODO         CODE:2 - Class using Regular Function

// Define a class using regular functions
function Car(make, model, year) {
  // Properties
  this.make = make;
  this.model = model;
  this.year = year;

  // Method
  this.getDetails = function () {
    return this.make + " " + this.model + " (" + this.year + ")";
  };
}

// Create instances of the Car class
var car1 = new Car("Toyota", "Corolla", 2020);
var car2 = new Car("Honda", "Accord", 2018);

// Access properties and methods
console.log(car1.make); // Output: Toyota
console.log(car2.getDetails()); // Output: Honda Accord (2018)

//!   CODE 2 EXPLANATION

/*

In the example above, we define a Car class using a regular function. The function acts as a constructor for creating car objects. 
Inside the constructor function, we define properties (make, model, year) and a method (getDetails) using 'this' keyword to refer to the instance 
being created.

To create instances of the class, we use the new keyword followed by the class name and pass the necessary arguments to the constructor function. 
We create car1 and car2 objects with different property values.

We can then access the properties and methods of each car object using dot notation (car1.make, car2.getDetails()), 
just like accessing properties and methods of an object.

This example demonstrates how regular functions can be used to create a class-like structure in JavaScript, allowing us to define properties and 
methods within the constructor function and instantiate objects using the new keyword.


*/

//TODO          CODE:3 - How "this" Keyword works in arrow function and in regular function

const arrowObj = {
  name: "Vinayak",
  method: () => {
    console.log(this.name); // it will refer to the global window hence this keword will not work in arrow function
  },
};

arrowObj.method();

const regularObj = {
  name: "Vinayak",
  method: function () {
    console.log(this.name); // it will refer to the current object and the value of the indicated properties.
  },
};

regularObj.method();
