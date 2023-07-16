// IN this we will learn
/*

1. arrName.indexOf(searchElement,[stratIndex])
2. arrName.lastIndexOf(searchElement,[stratIndex])
3. arrName.includes(searchElement,[stratIndex])

*/

let arrName = [
  "Vinayak",
  "Dhanappa",
  "Sheela",
  "Meenaxi",
  "Ashwini",
  "Sheela",
  "Meenaxi",
];

//  indexOf returns the first occurance of the element
console.log(arrName.indexOf("Sheela", [2])); //2
console.log(arrName.indexOf("Sheela", [3])); //5
console.log(arrName.indexOf("sheela")); // return -1 if element does not exists

//  lastIndexOf returns the first occurance of the element from last
console.log(arrName.lastIndexOf("Vinayak")); //0
console.log(arrName.lastIndexOf("Sheela", [arrName.length - 1])); // 5 -returns the index of the frst occurance of the element from last

//  includes returns the true if element exist else return false
console.log(arrName.includes("vinayak")); // false
console.log(arrName.includes("Vinayak")); // true
