//*****CODE 1- Correct way to call inner functions (Way 1)

function outer1() {
  function inner() {
    //console.log("Inner called...");
  }
}
// inner(); // inner is not defined

function outer2() {
  function inner() {
    console.log("Inner called..."); // Inner called...
  }
  inner(); // call a function
}
outer2();

//*****CODE 2- Correct way to call inner functions (Way 2)

//TODO---- With Regular function

function outer3() {
  function inner() {
    console.log("Inner called...");
  }
  return inner; // return a function
}
let cl = outer3();
cl();

//TODO---- With Arrow function

const outer4 = () => {
  return () => {
    console.log("Inner called...");
  };
};
cl = outer4();
cl();

//*****CODE 3- Counting from 0

const NonWorkingaddCounter = () => {
  let counter = 0;
  counter++;
  return counter;
};
console.log(NonWorkingaddCounter()); //1
console.log(NonWorkingaddCounter()); //1
console.log(NonWorkingaddCounter()); //1

const WorkingaddCounter = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};
cl = WorkingaddCounter();
console.log(cl()); // 1
console.log(cl()); //2
console.log(cl()); //3
