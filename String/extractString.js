// Three methods which help to extract strings
/*
1) slice
2) substr
3) substring
*/

let sent = "My name is Vinayak kittad and I'm 25 year old";
//**Using slice method */
console.log(sent.slice(10)); // from index 10 the string will print
console.log(sent.slice(-10));
console.log("Slice result :" + sent.slice(10, 13)); // nothing will print

// ** Using substr - it takes argument ( startIndex, endIndex)
console.log("Result of using Substring:" + sent.substring(10));
console.log("Result of using Substring:" + sent.substring(3, 10)); // do not take -ve value

/*
 * Consider the charAt() and charCodeAt()
 */
let str = "My code";
console.log(str.charAt(3)); //c
console.log(str.charCodeAt(3)); //99

///*Another syntax of extracting character from string

console.log(str[3]); //c
