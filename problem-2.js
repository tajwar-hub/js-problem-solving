// Problem 2: Sum of a Range of Numbers (1 to N)

// 7  = 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

let number = 7;

let sum = 0;

// Without function
// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
//   console.log("i=>>", i);
// }

// console.log("sum =>>", sum);

// With function
function sumRange(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log("i=>>", i);
  }
  return sum;
}

console.log(sumRange(7));
console.log(sumRange(4));
