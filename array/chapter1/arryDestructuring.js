let arr = [10, 20, 30, 40];
//********* */ Destructre the given array arr
const [a, b, c, d] = arr; // Syntax of destructuring
console.log("Array Destructuring " + a, b, c, d);
// *****We can skip the array values while destructuring
const [j, , k, l] = arr;
console.log("Array Destructuring with skipping value 20 :" + j, k, l); // the value 20 skipped, next value assiged
// *******How to set a default value while destructuring
const [w, x = "set defaultValue", y, z] = arr;
console.log(
  "How to set default value while array destructuring= " + w,
  x,
  y,
  z
);

// *************Destructuring array with rest operator
const [first, ...second] = arr;
console.log(
  "Destructurinng using the Rest operator " + first + " and " + second
);

// *************Excercise: Swiping values***************//

let Name = "Vinayak",
  surName = "Kittad";

[surName, Name] = [Name, surName];
console.log(Name, surName);
