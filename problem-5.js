// Problem 5: Reverse a String

let str = "I love Bangladesh";

console.log(str[10]);

console.log("string length=> ", str[str.length - 3]);
// let reverseWord = "";

// without function
// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   console.log("i-> ", i, letter);
//   reverseWord += letter;
// }
// console.log(reverseWord);

// With function

// with function
function reverseWord(word) {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    console.log("i-> ", i, letter);
    reverseWord += letter;
  }
  return reverseWord;
}

console.log(reverseWord("Programming"));
console.log(reverseWord("Bangladesh"));
