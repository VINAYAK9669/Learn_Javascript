// We will study what is the map() method in the javascript with practical usage
/*

map method will create new array without changing the original array
*/

let arr = [
  "Vinayak",
  "Dhanappa",
  "Sheela",
  "Meenaxi",
  "Ashwini",
  "Sheela",
  "Meenaxi",
];

let newArray = arr.map((element) => element + " Kittad");

console.log(newArray);

let arr1 = [
  {
    memberName: "Vinayak",
    memberSurname: "Kittad",
  },
  { memberName: "Sheela", memberSurname: "Bhakare" },
  {
    memberName: "Vinayak",
    memberSurname: "Mandi",
  },
];

let newSurnameArray = arr1.map((element) => element.memberSurname);
console.log(newSurnameArray);
