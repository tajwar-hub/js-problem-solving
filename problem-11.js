// Problem 11: Sum and Average of an Array

let arr = [1, 2, 5, 10];
let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   //   sum = sum + arr[i];
//   sum += arr[i];
// }

// console.log(sum);
// let avg = sum / arr.length;
// console.log(avg);

function generateAvg(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    //   sum = sum + arr[i];
    sum += arr[i];
  }

  let avg = sum / arr.length;

  return avg;
}

console.log(generateAvg([5, 10, 15]));
console.log(generateAvg([1, 2, 3]));
console.log(generateAvg([10, 10, 10]));