// Shorthand Property Notation

// * 1) \d - Matches any digit
const text = "I am learning\n HTML-5\t, CSS3, JS ES6 & React_18 ?!%&";
const pattern = /\d+/g;
const patternMatch = text.match(pattern);
console.log("Pattern Match d: " + patternMatch);

// * 2) \D - Matches any non digit character
const pattern1 = /\D+/g;
const patternMatch1 = text.match(pattern1);
console.log("Pattern Match D: " + patternMatch1);

// * 3) \w - Matches any WORD-character, digits, underscores [Exludes- '-','&'..etc]
const pattern2 = /\w+/g;
const patternMatch2 = text.match(pattern2);
console.log("Pattern Match w: " + patternMatch2);

// * 4) \W - Matches any NON-WORD characters and digits
const pattern3 = /\W+/g;
const patternMatch3 = text.match(pattern3);
console.log("Pattern Match W: " + patternMatch3);

// * 5) \s - Matches any white spaces character (spaces, tabs, line-break)
const pattern4 = /\s+/g;
const patternMatch4 = text.match(pattern4);
console.log("Pattern Match s: " + patternMatch4);

// * 6) \S - Matches any white spaces character (exludes- spaces, tabs, line-break)
const pattern5 = /\S+/g;
const patternMatch5 = text.match(pattern5);
console.log("Pattern Match S: " + patternMatch5);

// * 7) \m -Multiline search modifier

const textInfo = `Line 1: Hello World
Line 2: This is a test
Line 3: Multiline example
`;

const patterntest = /^Line \d+:/gm;
/*
Notice that each line that starts with "Line X:" is matched individually due to the m flag.
*/

const printMatches = textInfo.match(patterntest);
console.log("How multiline modifier works:" + printMatches);
