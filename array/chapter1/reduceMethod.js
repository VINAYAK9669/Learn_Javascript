// In this we will learn the reduce method in javascript
/*
Below are the some excerxises with which we will understand the concept nd depth of the reduce method

1) Flatten the below 2D array with reduce mehthod
    arr= [
    [45,90],[5,6],[2,4]
    ];

 output: [45,90,5,6,2,4]

*/

let arr = [
  [45, 90],
  [5, 6],
  [2, 4],
];

let result = arr.reduce((accumalator, currentElement) => {
  return accumalator.concat(currentElement);
}, []);
// Here [] represents the
console.log(result);

/*
GET THE SUM OF THE KEY FIELD OF AN OBJECT LITERAL

const employees =[
    {
    eNo:1001, salary:3000
    }
    {
    eNo:1002, salary:3000
    }
    {
    eNo:1002, salary:3000
    }
]
 */

const employees = [
  {
    eNo: 1001,
    salary: 3000,
  },
  {
    eNo: 1002,
    salary: 3000,
  },
  {
    eNo: 1002,
    salary: 3000,
  },
];

let sumResult = employees.reduce((accumalator, current) => {
  return (accumalator += current.salary);
}, 0);

console.log(sumResult);

//TODO: Find out the sum of all the elements in an array
let arr1 = [1, 2, 3, 4, 5];
let arrSum = arr1.reduce((accumalator, current) => {
  return (accumalator += current);
}, 0);
// here 0 represents that accumalator value must start from 0
console.log(arrSum);
