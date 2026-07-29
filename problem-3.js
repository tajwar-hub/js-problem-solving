// Problem 3: Factorial of a Number

let number = 3;

// Without function
// let result = 1;
// for (let i = 1; i <= number; i++) {
//   console.log("i=>", i);
//   result = result * i;
// }

// console.log("result=>", result);

// With function
function getFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    console.log("i=>", i);
    result = result * i;
  }

  return result;
}

let factorialOfFour = getFactorial(4);
let factorialOfThree = getFactorial(3);

console.log(factorialOfFour);
console.log(factorialOfThree);
