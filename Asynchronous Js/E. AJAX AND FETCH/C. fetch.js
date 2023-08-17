/*
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response.ok); // true
  console.log(response.status); //200

  if (response.ok) {
    data = await response.json();
    //   blob will read the binary data
    console.log(data);
  }
}
fetchData();
*/

/* This is the fetch syntax and above code is using await */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()).then((data) => {
    console.log(data);
  });
