//============================================Question 2 demonstration=================================

//----------------------------Hoisting in JavaScript----------------------------------

//Example 1
x = 10;
console.log(x); // 10
var x;

//Example 2
console.log(x); // undefined
var x;
x = 10;

//Example 3

addition();

function addition() {
  let a = 10,
    b = 20;

  console.log("Sum is " + (a + b));
}

//Example 4

// y = 10;
// //console.log(x); // Reference ERROR
// let y;

/*

/*On observing the variable decalred by 'var' and 'let' we can tell that only with 'var'  the hoisting is possible.

*/

//============================================Question 3 demonstration=================================

//How does block scope works?
console.log("===== Understanding of Block Scope======");
//Example 1

console.log(">-------Using Let keyword");
let a = 10;
{
  // here above varible 'a' will not be accesses here in this block
  let a = 20;

  console.log("Value inside the block " + a); //20
}
console.log("Value outside the block " + a); //10

//Example 2
console.log(">--------Using const keyword");
const b = 2;
{
  // here above varible 'a' will not be accesses here in this block
  const b = 20;

  console.log("Value inside the block " + b); //20
}
console.log("Value outside the block " + b); //2

//Example 3
console.log(">--------Using var keyword");
var c = 2;
{
  // here above varible 'a' will not be accesses here in this block
  var c = 20;

  console.log("Value inside the block " + c); //20
}
console.log("Value outside the block " + c); //2
