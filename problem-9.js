// Problem 9: Find the Largest Number in an Array

let arr = [500, 120, 20, 5010, 1220, 7500];

// without func
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   let currentElement = arr[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }
//   console.log("currentElement", currentElement);
// }

// console.log("largest=> ", largest);

// With function
function largestNumberFromArray(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement > largest) {
      largest = currentElement;
    }
    // console.log("currentElement", currentElement);
  }
  return largest;
}

console.log(largestNumberFromArray([250, 20, 5, 64, 560, 1050]));
