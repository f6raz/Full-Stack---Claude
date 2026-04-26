const fruits = ["apple", "banana", "mango"];

console.log(fruits.indexOf("banana")); // → 1
console.log(fruits.indexOf("grape")); // → -1 (not found)


// -----Includes


const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("mango"));  // → true
console.log(fruits.includes("grape"));  // → false

// -----------------Slice

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(1, 3)); // → [20, 30]
console.log(numbers.slice(2));    // → [30, 40, 50] (to the end)
console.log(numbers);             // → [10, 20, 30, 40, 50] (unchanged!)

//------------------ Splice


const fruits = ["apple", "banana", "mango"];

// Remove 1 item at index 1
fruits.splice(1, 1);
console.log(fruits); // → ["apple", "mango"]

// Add items at index 1
fruits.splice(1, 0, "grape", "kiwi");
console.log(fruits); // → ["apple", "grape", "kiwi", "mango"]


// ------------------ find

const numbers = [5, 12, 8, 130, 44];

const bigNumber = numbers.find(n => n > 10);
console.log(bigNumber); // → 12 (first one above 10)


// ------------------ findIndex


const numbers = [5, 12, 8, 130, 44];

const index = numbers.findIndex(n => n > 10);
console.log(index); // → 1


// ------------------ Reduce

const numbers10 = [1, 2, 3, 4, 5];
const sum = numbers10.reduce((total, n) => total + n, 0);
// → 15