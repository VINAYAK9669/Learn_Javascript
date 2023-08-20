function sum(a, b) {
  console.log(a + b);
}
function cube(a) {
  console.log(a * a * a);
}

export { sum as total, cube };
// sum as total= here we used alias name for sum, so when we import we must have to call it as total()
