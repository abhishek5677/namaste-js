// reverse a string

// const input = "abhishek";

// const reverseStr = (n) => {
//   let tempStr = "";

//   for (let i = n.length - 1; i >= 0; i--) {
//     tempStr = tempStr + n[i];
//   }
//   return tempStr;
// };

// const output = reverseStr(input);

// console.log(output);

// “Find the first character that appears twice in a string”?

// const input = "abhishek"; // h
// const input = "abc"; // null
// const input= [10, 20, 30, 40, 10] // 10

// const firstRepeatedChar = (str) => {
//   let freq = {};

//   for (const char of str) {
//     if (freq[char]) {
//       return char;
//     }
//     freq[char] = 1;
//   }
//   return null;
// };

// console.log(firstRepeatedChar(input));

//  Check palindrome

// const input = "mom"; // true
// const input = "ibm"; // false

// const checkPalindrom = (str) => {

//     let text = "";

//     for(let i = str.length-1; i >= 0; i-- ){
//         text = text + str[i]
//     }

//     if(text === str){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(checkPalindrom(input));

// Find maximum number in array

// const input = [100, 20, 30, 40, 50]; // 100

// const findMaxNum = (arr) => {
//   if (arr.length === 0) return null;

//   if (arr.length === 1) return arr[0];

//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMaxNum(input));

// length of the longest consecutive subsequence in an array

// const array = [1, 20, 30, 3, 60, 5, 2, 3]; // 3

// const findLongestSubsequence = (x) => {
//   const arr = x.sort((a, b) => a - b);

//   let count = 1;
//   let n = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] - arr[i + 1] == -1) {
//       count++;
//     } else if (count > n) {
//       n = count;
//       count = 1;
//     }
//   }
//   return n;
// };

// console.log(findLongestSubsequence(array));

// Find first non-repeating character

// const input = "aabbcdd"; //c

// const findNonRepeatingChar = (x) => {
//   let freq = {};

//   for (const char of x) {
//     if (!freq[char]) {
//       freq[char] = 1;
//     } else {
//       freq[char] = freq[char] + 1;
//     }
//   }

//   for (const char of x) {
//     if (freq[char] === 1) {
//       return char;
//     }
//   }
// };

// console.log(findNonRepeatingChar(input));

// Input: "listen", "silent" // true

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   let freq = {};

//   for (const char of s) {
//     if (freq[char]) {
//       freq[char] = freq[char] + 1;
//     } else {
//       freq[char] = 1;
//     }
//   }

//   for (const char of t) {
//     if (!freq[char]) {
//       return false;
//     }

//     freq[char] = freq[char] - 1;
//   }

//   return true;
// };
