# JavaScript Arrays — Complete Summary

---

## What is an Array?

An ordered list of values. Values can be anything — numbers, strings, booleans, even other arrays.

```javascript
const fruits  = ["apple", "banana", "mango"];
const numbers = [10, 20, 30, 40];
const mixed   = ["hello", 42, true];
```

---

## Accessing Items

Indexes start at **0**.

```javascript
const fruits = ["apple", "banana", "mango"];

fruits[0]; // → apple
fruits[1]; // → banana
fruits[2]; // → mango

// Last item
fruits[fruits.length - 1]; // → mango
```

---

## Array Length

```javascript
fruits.length; // → 3
```

---

## Adding & Removing Items

```javascript
const fruits = ["apple", "banana", "mango"];

fruits.push("orange");   // Add to END    → ["apple", "banana", "mango", "orange"]
fruits.pop();            // Remove from END → ["apple", "banana", "mango"]
fruits.unshift("kiwi");  // Add to START  → ["kiwi", "apple", "banana", "mango"]
fruits.shift();          // Remove from START → ["apple", "banana", "mango"]
```

| Method        | Action              |
|---------------|---------------------|
| `push(item)`  | Add to the end      |
| `pop()`       | Remove from the end |
| `unshift(item)` | Add to the start  |
| `shift()`     | Remove from the start |

---

## Searching

```javascript
const fruits = ["apple", "banana", "mango"];

fruits.indexOf("banana");   // → 1 (index, or -1 if not found)
fruits.includes("mango");   // → true

const numbers = [5, 12, 8, 130];
numbers.find(n => n > 10);      // → 12 (first match)
numbers.findIndex(n => n > 10); // → 1 (index of first match)
```

| Method        | Returns       | Use when                        |
|---------------|---------------|---------------------------------|
| `indexOf`     | Index or -1   | Finding position of a value     |
| `includes`    | true / false  | Checking if a value exists      |
| `find`        | The item      | Finding first matching item     |
| `findIndex`   | Index         | Finding index of first match    |

---

## Slicing & Splicing

```javascript
const numbers = [10, 20, 30, 40, 50];

// slice — copies a portion (original unchanged)
numbers.slice(1, 3);  // → [20, 30]  (end index NOT included)
numbers.slice(2);     // → [30, 40, 50]

// splice — modifies the original
const fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1);              // Remove 1 item at index 1 → ["apple", "mango"]
fruits.splice(1, 0, "grape");     // Add "grape" at index 1   → ["apple", "grape", "mango"]
```

|         | `slice`          | `splice`             |
|---------|------------------|----------------------|
| Modifies original? | ❌ No  | ✅ Yes               |
| Returns | New array        | Removed items        |
| Use for | Copying a portion | Adding/removing items |

---

## Sorting & Reversing

```javascript
// Alphabetical sort
const fruits = ["mango", "apple", "banana"];
fruits.sort(); // → ["apple", "banana", "mango"]

// Number sort (must use compare function!)
const numbers = [10, 1, 30, 5];
numbers.sort((a, b) => a - b); // Ascending  → [1, 5, 10, 30]
numbers.sort((a, b) => b - a); // Descending → [30, 10, 5, 1]

// Reverse
numbers.reverse(); // flips the array in place
```

> ⚠️ `sort()` and `reverse()` **modify the original array**.

---

## Combining Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat (classic)
const combined = arr1.concat(arr2); // → [1, 2, 3, 4, 5, 6]

// spread operator (modern, preferred)
const combined = [...arr1, ...arr2];         // → [1, 2, 3, 4, 5, 6]
const combined = [...arr1, 99, ...arr2];     // → [1, 2, 3, 99, 4, 5, 6]
```

---

## Converting Array to String

```javascript
const fruits = ["apple", "banana", "mango"];

fruits.join(", ");  // → "apple, banana, mango"
fruits.join(" & "); // → "apple & banana & mango"
fruits.join("");    // → "applebananamango"
```

---

## Looping

```javascript
const fruits = ["apple", "banana", "mango"];

// forEach
fruits.forEach(fruit => console.log(fruit));

// for...of (can use break to stop early)
for (const fruit of fruits) {
  if (fruit === "banana") break;
  console.log(fruit);
}
```

---

## Transforming — `map`, `filter`, `reduce`

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// map — transform every item, returns new array
const doubled = numbers.map(n => n * 2);
// → [2, 4, 6, 8, 10, 12]

// filter — keep items where callback returns true
const evens = numbers.filter(n => n % 2 === 0);
// → [2, 4, 6]

// reduce — reduce all items to a single value
const sum = numbers.reduce((total, n) => total + n, 0);
// → 21
```

| Method   | Returns    | Use when                          |
|----------|------------|-----------------------------------|
| `map`    | New array  | Transforming every item           |
| `filter` | New array  | Keeping only some items           |
| `reduce` | Single value | Combining all items into one    |

---

## Chaining Methods Together

```javascript
const students = [85, 92, 45, 78, 96, 55];

const average = students
  .filter(s => s >= 60)       // keep passing grades
  .map(s => s + 5)            // add bonus points
  .reduce((sum, s) => sum + s, 0) / students.filter(s => s >= 60).length;

console.log(average); // → 92.75
```

---

## Full Cheatsheet

| Method          | Modifies Original? | Returns       | Purpose                        |
|-----------------|--------------------|---------------|-------------------------------|
| `push`          | ✅ Yes             | New length    | Add to end                    |
| `pop`           | ✅ Yes             | Removed item  | Remove from end               |
| `unshift`       | ✅ Yes             | New length    | Add to start                  |
| `shift`         | ✅ Yes             | Removed item  | Remove from start             |
| `sort`          | ✅ Yes             | Sorted array  | Sort items                    |
| `reverse`       | ✅ Yes             | Reversed array| Flip order                    |
| `splice`        | ✅ Yes             | Removed items | Add/remove at position        |
| `slice`         | ❌ No              | New array     | Copy a portion                |
| `concat`        | ❌ No              | New array     | Combine arrays                |
| `map`           | ❌ No              | New array     | Transform every item          |
| `filter`        | ❌ No              | New array     | Keep matching items           |
| `reduce`        | ❌ No              | Single value  | Combine to one value          |
| `forEach`       | ❌ No              | Nothing       | Loop & do something           |
| `find`          | ❌ No              | Item or undefined | First matching item       |
| `findIndex`     | ❌ No              | Index or -1   | Index of first match          |
| `indexOf`       | ❌ No              | Index or -1   | Position of a value           |
| `includes`      | ❌ No              | true / false  | Check if value exists         |
| `join`          | ❌ No              | String        | Array to string               |
