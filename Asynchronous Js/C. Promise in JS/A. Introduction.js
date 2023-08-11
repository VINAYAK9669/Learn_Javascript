//* Introduction to Promises
/*
   * Question 1) What are promises in java
  
             -It is the way to manage the asynchronous operations in a more organized and maintainable manner.
             -Promises are the objects that represents the eventual completion or failure of an asynchronous
              operatoins, and they provide more structured and readable way to handle asychronous code.   


* Question 2) What are the status in promises.

            Promises have three states

            1) Pending : The initial state (default). The promises is neither fulfilled nor rejected.
            2) Fullfilled : The asynchonous operation completed successfully
            3) Rejected: The asynchronous operation encountered an error or failed and the promise now has a reason for the failure


* Question 3) What are the benefits of Promises in JS

            - Promises help to avoid the "callback hell" problem
            - Promises allow us to chain asynchronous operations in a more linear and redable way.
            - Provides a centralized way to handle errors for a sequence of asynchronous operations.


* Question 4) How we can create a promises in JS

            - Create a promise with the "Promise" constructor which takes function as arguments.
            - Put asynchronous task inside the promise function which takes two arguments as 'resolve' and 'rejected'
            - You use '.then()' to say what to do when the task is successfull.
            - You use '.catch()' to say what to do when there is an error.

* Question 5) What is the chaining Promises.

           - A powerful features of promises is the ability to chain them together, making complex asychronous operations more readable.
           - This is done using the '.then()' method which return a new promises. 
           - This allows you to perform sequential operations.

*/

// Exercise 1: Syntax Oriented Program

//Object: If the number generated is greater than 0.5 then show error message else success message.


const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject("Number is greater than 0.5");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log("Successfull: with a result " + result);
  })
  .catch((error) => {
    console.log(error);
  });
