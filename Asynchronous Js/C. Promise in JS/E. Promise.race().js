// Promise.race()

/*

Question 1)  What is the Promise.race()

Promise.race() is used when you have multiple promises and you want to get the result of the first promise either 
fufill or reject that settles. 

It returns a single promise that fullfilss or rejects as soon as one of the input promises settles.

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
  }, 1000);
});

// Now I want that if all the above promises are resolved then I will print something

Promise.race([p1, p2, p3]).then((Message) => {
  console.log(Message); // Promise 3
});
// Create a promise 4
const p4 = new Promise((resolve, reject) => {
  // Asychronous Function
  setTimeout(() => {
    reject("Promise-4 Rejected");
  }, 500);
});

Promise.race([p1, p2, p3, p4])
  .then((Message) => {
    console.log(Message);
  })
  .catch((error) => {
    console.log(error); // Promise-4 Rejected
  });
