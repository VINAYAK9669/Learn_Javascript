/*

How RegEx can be created
    There are two methods by which we can create regEx
        1) Using constructor 
        2) Using Literal Notation
*/
//  1) Using Constructor method

const patternString = "apple";
const flags = "i"; // "i" is an identifier represents case-insensitiveness
const regExObject = new RegExp(patternString, flags);

const text = "I like apples. Apples are delicous";
const matches = text.match(regExObject);
console.log(matches);

// 2) Using Literal Notation
const pattern = /apple/i;
const string = "I like apples. Apple are delicous";
const match = string.match(pattern);
console.log(match);
