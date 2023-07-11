// IN this we will learn remove, Insert, Replace, Add operations with shift, unshift, push, pop and splice methods

let array = ["One", "Two", "Three", "Four", "Five"];

console.log(array.push("Six")); // 6 >> Return the number of elements
console.log(array); // [ 'One', 'Two', 'Three', 'Four', 'Five', 'Six' ]
console.log(array.unshift("Zero")); //7 >> Return the number of elements
console.log(array); // [ 'One', 'Two', 'Three', 'Four', 'Five', 'Six' ]
console.log(array.splice(3, 2, "NewThree", "NewFour"));
// splice(indexToRemove, NumberodelementsToRemove, AddNewElements)
console.log(array);
