// Problem 6: Count Vowels in a String

// Vowels -> a e i o u

// let str = "Programming Hero";

// let vowels = "aeiou";

// console.log(vowels.includes("e"));

// Without function
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   console.log("i,  -> letter ->>> ", i, letter);
//   if (vowels.includes(letter)) {
//     console.log("Vowel");
//     count++;
//   }
// }
// console.log("count->>", count);

// With function
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log("i,  -> letter ->>> ", i, letter);
    if (vowels.includes(letter)) {
      console.log("Vowel");
      count++;
    }
  }
  return count;
}

let phVowelCount = countVowels("Programming Hero") 
console.log("Programming Hero te vowel ache: ", phVowelCount);

let bdVowelCount = countVowels("Bangladesh") 
console.log("Bangladesh e vowel ache: ", bdVowelCount);