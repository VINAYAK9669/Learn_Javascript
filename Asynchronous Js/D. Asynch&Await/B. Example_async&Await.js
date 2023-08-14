// Exercise-1) Create a timer using async and await features which should stop at 5seconds

/*
Description: 
                1) create a two functions timer and delay
                2) timer → async function and delay → which returns promise
                3) timer function which will check the remaining time is >=0, if not then use delay using await
                4) When the time is up then console the message "Time is up!"
                5) Now the delay function which will return the promise using setTimeout function
                6) Also handle the then() and catch in this program

*/

// Define a delay function

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Now define an async function timer

async function timer(duration) {
  // run the forloop to check wheather the duration is >=0
  for (let remainingTime = duration; remainingTime >= 0; remainingTime--) {
    console.log(`Time left: ${remainingTime} seconds`);
    await delay(1000); //  wait for 1 second
  }
}
// Call the async timer function for 5 seconds
timer(5)
  .then(() => {
    console.log("Timer completed");
  })
  .catch((error) => {
    console.error("Error", error);
  });

/*
  
  Output:

PS C:\Users\VINAYAK KITTAD\Desktop\test> node test.js
Time left: 5 seconds
Time left: 4 seconds
Time left: 3 seconds
Time left: 2 seconds
Time left: 1 seconds
Time left: 0 seconds
Timer completed
PS C:\Users\VINAYAK KITTAD\Desktop\test> 
  */
