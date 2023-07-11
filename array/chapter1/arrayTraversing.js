//Traditional method to traverse through array

let array = ["Vinayak", "Ashwini", "Sheela", "Meenaxi"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i] + " ");
}

console.log("Second Method to traverse an array");
// let of method to traverse an array

for (let name of array) {
  console.log(name);
}

console.log("Third Method to traverse an array");

for (let name in array) {
  console.log(name);
}

console.log("Fourth Method to traverse an array");

array.forEach((element, index) => {
  console.log(element, index);
});
// in forEach we cannot break the loop in between
