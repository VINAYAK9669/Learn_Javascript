// Observe the below code as test() function calling the object literal and finallly the console output is the object literal

function test() {
  return {
    //TODO: as this semicolon is adjecent to the return statement so it will return the object literal as expected.

    a: 5,
  };
}
const obj = test();
console.log(obj); // {a: 5}

// Observe the below code as test1() function calling the object literal and finallly the console output is undefined

function test1() {
  return;
  /* 
    TODO: whenever we add bracket at the next line to the return statement then the semicolon will automatically insert next to the return
    TODO: statment hence will the code terminated there only
    */

  {
    a: 5;
  }
}
const obj1 = test1();
console.log(obj1);
