// This program fetches data from a specified URL and logs it to the console.

// The fetch function is used to make a network request to the specified URL.
// It returns a Promise that resolves to the Response to that request.
fetch("https://jsonplaceholder.typicode.com/users")
  // The .then() method is used to handle the Promise returned by fetch.
  // It takes a callback function as an argument that will be executed when the Promise resolves.
  .then((response) => response.json()) 
  // Here, we chain another .then() to the previous one.
  // This .then() is used to handle the Promise returned by the previous .then().
  // It takes a callback function as an argument that will be executed when the Promise resolves.
  .then((data) => {
    // Inside this callback, we have access to the JSON data retrieved from the previous step.
    // In this case, the 'data' parameter represents the parsed JSON data.
    console.log(data); // We log the parsed JSON data to the console.
  });
