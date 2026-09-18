// index.js - JavaScript Functions

// 1. Add two numbers
function add(a, b) {
  return a + b;
}

// 2. Check if number is even
function isEven(num) {
  return num % 2 === 0;
}

// 3. Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 4. Find max in array
function findMax(arr) {
  return Math.max(...arr);
}

// 5. Count vowels in string
function countVowels(str) {
  return str.toLowerCase().match(/[aeiou]/g).length;
}

// Usage examples:
console.log(add(5, 3));              // 8
console.log(isEven(4));               // true
console.log(reverseString("hello"));   // "olleh"
console.log(findMax([1, 5, 3, 9]));    // 9
     // 2