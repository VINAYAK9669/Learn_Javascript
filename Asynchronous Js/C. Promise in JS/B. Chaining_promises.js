/*
Scenario: Ordering Food Online

Placing an Order: 
  - You want to order a meal online. You place an order, and the restaurant gives you a promise of delivering the meal.
Delivery Preparation: 
  - While you wait for your order, the restaurant starts preparing your meal. 
  - This preparation is an asynchronous process, but they promise to deliver the meal once it's ready.
Delivery to Your Door: 
  - Once the meal is prepared, they deliver it to your door. 
  - This is also asynchronous, but they promise to give you the meal when it arrives.

Now we will show these asynchronous process with the messages

*/
// let's map this scenario to the concept of promises:

// Placing an order (creating a promise)
const placeOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Simulating successful order placement
    resolve("Your order has been placed!");
  }, 1000);
});
// Delivery prepration (chaning Promise)
placeOrder
  .then((message) => {
    console.log(message); // "Your order has been placed!"

    // Preparing the meal (asynchronous operation)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Your Meal is ready!");
      }, 2000);
    });
  })
  .then((message) => {
    console.log(message); // "Your meal is ready!"

    // Delivering the meal (asynchronous operation)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating meal delivery
        resolve("Your meal has been delivered!");
      }, 1500);
    });
  })
  .then((message) => {
    console.log(message); // "Your meal has been delivered!"
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
