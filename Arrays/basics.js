const fruits = ["apple", "banana", "mango"];

// Change an item
fruits[0] = "grape";
console.log(fruits); // → ["grape", "banana", "mango"]

// Add to the END
fruits.push("orange");
console.log(fruits); // → ["grape", "banana", "mango", "orange"]

// Remove from the END
fruits.pop();
console.log(fruits); // → ["grape", "banana", "mango"]

// Add to the BEGINNING
fruits.unshift("kiwi");
console.log(fruits); // → ["kiwi", "grape", "banana", "mango"]

// Remove from the BEGINNING
fruits.shift();
console.log(fruits); // → ["grape", "banana", "mango"]
