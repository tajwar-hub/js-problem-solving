// Problem 1: Check if a Number is Even or Odd

let number = 7;

// Without function
// if (number % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

// With function
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}

console.log(checkEvenOrOdd(25));
console.log(checkEvenOrOdd(26));
console.log(checkEvenOrOdd(501));
