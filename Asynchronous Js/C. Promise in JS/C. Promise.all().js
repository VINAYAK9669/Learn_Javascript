// * Let us understand the Promise.all()

/*

    * Promise.all() used when you have multiple promises and you want to wait for all of them to either fufill or reject.
    * It returns a single promise that fullfills with an array of results when all the input promises are fulfilled.
    * If any one of the input promises rejects, the whole Promise.all() operation is rejected.

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

Promise.all([p1, p2, p3]).then((Message) => {
  console.log(Message); // [ 'Promise-1', 'Promise-2', 'Promise-3' ]
});

// Now I will made one of the primose rejects for this I will also use 'catch'
// Create a promise 4
const p4 = new Promise((resolve, reject) => {
  // Asychronous Function
  setTimeout(() => {
    reject("Promise-4 Rejected");
  }, 2000);
});

Promise.all([p1, p2, p3, p4])
  .then((Message) => {
    console.log(Message); // This will not execute
  })
  .catch((error) => {
    console.log(error); //Promise-4 Rejected
  });
