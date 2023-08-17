/*
What POST method does in fetch?
 - The POST method in the fetch function is used to send data to the server as part of a network request.
 - It's commonly used when you want to create or update resources on the server, 
    such as submitting form data, sending JSON payloads, or any other kind of data that needs to be processed by the server.

*/


/* This is the fetch syntax and above code is using await */

// Create an object named "todo" representing a task to be added
const todo = {
  userId: 1001,
  title: 'New Title',
  completed: false
};

// Use the "fetch" function to make a POST request to the specified URL
// The request body contains the JSON representation of the "todo" object
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: 'POST', // Specify the HTTP method as POST
  headers: {
    'Content-Type': 'application/json;charset=utf-8' // Set the content type as JSON
  },
  body: JSON.stringify(todo) // Convert the "todo" object to JSON string and include it in the body
})
  .then((response) => console.log(response)); // Log the response object to the console

// This code demonstrates making a POST request using the "fetch" function
// The same pattern can be used for other HTTP methods like DELETE, PUT, and PATCH

