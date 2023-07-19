/*
* Two methods for case conversion 
1) str.toLowerCase()
2) str.toUpperCase()
*/

let string = " Hi I'm Vinayak Kittad";

let uppercase = string.toUpperCase();
let lowercase = string.toLowerCase();
console.log(uppercase);
console.log(lowercase);

// * replace() method

let str = "Test23";

console.log(str.replace(23, 1)); // Test1

//* Excercise- check whether the entered character is vowel or consonants
function checkChar() {
  let ch = prompt("Enter any Character");
  ch = ch.toLowerCase();
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log("The character Entered is Vowel");
  } else {
    console.log("The character entered is Consontant");
  }
}
checkChar();
