//-------------- Sroting Alphabetically -----------------

const fruits = ["mango", "apple", "banana"];

fruits.sort();
console.log(fruits); // → ["apple", "banana", "mango"]


//-------------- Sroting Numbers -----------------

const numbers = [40, 100, 1, 5, 25, 10];

numbers.sort();
console.log(numbers); // → [1, 10, 100, 25, 40, 5] wrong ❌ (it behaves wrongly with numbers)

//-------------- Sorting Numbers with Compare Function -----------------

const numbers2 = [40, 100, 1, 5, 25, 10];

numbers2.sort((a, b) => a - b);
console.log(numbers2); // → [1, 5, 10, 25, 40, 100] correct ✅

//-------------- Sorting in Descending Order -----------------

const numbers3 = [40, 100, 1, 5, 25, 10];

numbers3.sort((a, b) => b - a);
console.log(numbers3); // → [100, 40, 25, 10, 5, 1] correct ✅

//-------------- Reverse an Array -----------------

const fruits2 = ["mango", "apple", "banana"];

fruits2.reverse();
console.log(fruits2); // → ["banana", "apple", "mango"]

//-------------- Combine two arrays -----------------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2);
console.log(combined); // → [1, 2, 3, 4, 5, 6]

//-------------- Combine two arrays using Spread Operator -----------------

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

const combined2 = [...arr3, ...arr4];
console.log(combined2); // → [1, 2, 3, 4, 5, 6]

//-------------- Join ------------------

const words = ["Hello", "World", "from", "JavaScript"];

const sentence = words.join(" ");
const sentence2 = words.join("-");
const sentence3 = words.join(",");
const sentence4 = words.join(" & ");

console.log(sentence); // → "Hello World from JavaScript"
console.log(sentence2); // → "Hello-World-from-JavaScript"
console.log(sentence3);
console.log(sentence4); // → "Hello&World&from&JavaScript"

