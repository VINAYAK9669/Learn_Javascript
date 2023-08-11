// * Promise.allSettled()

/*

Question 1) Promise.allSettled() explain in brief 

            - It is used when you have multiple promises and you want to wait for all of them to settle
              (either fulfill or reject), regardless of wheather any of them reject.
            - It return a promise that fulfills with an array of objects representing the outcome of each input promises.

            
Question 2) Differece between  Promise.allSettled() and Promise.all()

      Feature                        Promise.allSettled()                                   Promise.all()
        
      Handling Rejections           Continues even if some promises reject                  Stops if any promise rejects
      Outcome of Rejections         Provides information about all outcomes                 Stops at the first rejection
      Output Format                 Array of objects with status and value/reason           Single rejection reason or array of fulfilled values
      Handling Multiple Outcomes    Captures all outcomes, both fulfilled and rejected      Captures only successful outcomes
      Execution Order               Resolves after all promises settle                      Resolves after all promises fulfill
      Failure Behavior              No immediate failure on rejection                       Immediate failure on any rejection
      Use Case                      When you need to know about all outcomes                When all promises must fulfill
*/

// Create a promise 1
const p1 = new Promise((resolve, reject) => {
  // Asychronous Function
  setTimeout(() => {
    resolve("Promise-1");
  }, 2000);
});

// Create a promise 2
const p2 = new Promise((resolve, reject) => {
  // Asychronous Function
  setTimeout(() => {
    resolve("Promise-2");
  }, 2000);
});

// Create a promise 3
const p3 = new Promise((resolve, reject) => {
  // Asychronous Function
  setTimeout(() => {
    resolve("Promise-3");
  }, 2000);
});

// Now I want that if all the above promises are resolved then I will print something

Promise.allSettled([p1, p2, p3]).then((Message) => {
  console.log(Message);
  // It provides array of objects
  /*
    [
  { status: 'fulfilled', value: 'Promise-1' },
  { status: 'fulfilled', value: 'Promise-2' },
  { status: 'fulfilled', value: 'Promise-3' } 
]
    */
});

// Now I will made one of the primose rejects for this I will also use 'catch'
// Create a promise 4
const p4 = new Promise((resolve, reject) => {
  // Asychronous Function
  setTimeout(() => {
    reject("Promise-4 Rejected");
  }, 2000);
});

Promise.allSettled([p1, p2, p3, p4])
  .then((Message) => {
    console.log(Message);
    /*
    [
  { status: 'fulfilled', value: 'Promise-1' },
  { status: 'fulfilled', value: 'Promise-2' },
  { status: 'fulfilled', value: 'Promise-3' },
  { status: 'rejected', reason: 'Promise-4 Rejected' }
]
     */
  })
  .catch((error) => {
    // This bock will won't execute as in promise.all() upon any rejection
    console.log(error);
  });
