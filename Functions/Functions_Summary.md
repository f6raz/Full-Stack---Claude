# JavaScript Functions — Complete Summary

---

## What is a Function?

A reusable block of code that takes some input, does something, and optionally returns an output.

```javascript
function greet() {
  console.log("Hello, world!");
}

greet(); // → Hello, world!
```

---

## Regular Functions

```javascript
// No parameters
function sayHi() {
  console.log("Hi!");
}

// With parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

// With return value
function add(a, b) {
  return a + b;
}

greet("Alice"); // → Hello, Alice!
add(3, 5);      // → 8
```

---

## Parameters vs Arguments

```javascript
function greet(name) { // 'name' is the PARAMETER (placeholder)
  console.log("Hello, " + name);
}

greet("Alice"); // "Alice" is the ARGUMENT (actual value passed in)
```

| Term      | What it means                          |
|-----------|----------------------------------------|
| Parameter | Placeholder defined in the function    |
| Argument  | Actual value passed when calling       |

---

## The `return` Keyword

Sends a value back out of the function. Once hit, the function stops.

```javascript
function multiply(a, b) {
  return a * b;
  console.log("This never runs"); // ⚠️ unreachable code
}

let result = multiply(4, 5); // → 20
```

---

## Arrow Functions

A shorter, modern way to write functions.

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function — same thing
const add = (a, b) => {
  return a + b;
};

// One-liner (implicit return)
const add = (a, b) => a + b;
```

### Parameter Rules for Arrow Functions

```javascript
const sayHi  = () => console.log("Hi!");       // No params  → need ()
const double = n => n * 2;                      // One param  → can drop ()
const add    = (a, b) => a + b;                 // Two+ params → need ()
const calc   = (a, b) => { return a + b; };     // Multi-line → need {} and return
```

| Situation       | Syntax               |
|-----------------|----------------------|
| No parameters   | `() => ...`          |
| One parameter   | `n => ...`           |
| Two+ parameters | `(a, b) => ...`      |
| Multiple lines  | `(a, b) => { return ...; }` |
| One-liner return | `(a, b) => a + b`  |

---

## Scope

Where a variable can be seen and used.

```javascript
let global = "I'm everywhere"; // global — accessible anywhere

function example() {
  let local = "I'm only in here"; // local — only inside this function
  console.log(global); // ✅ can see outside
  console.log(local);  // ✅ can see inside
}

console.log(global); // ✅ accessible
console.log(local);  // ❌ Error! Not accessible outside
```

### The One-Way Glass Rule 🪟

- Functions can **look outward** and see global variables
- The outside **cannot look inward** and see local variables

| Type   | Where defined          | Accessible          |
|--------|------------------------|---------------------|
| Local  | Inside a function      | Only inside that function |
| Global | Outside all functions  | Everywhere          |

---

## Functions as Values

In JavaScript, functions are values — just like numbers or strings. You can store them and pass them around.

```javascript
// Store in a variable
const sayHi = () => console.log("Hi!");

// Pass as an argument
function runTwice(fn) {
  fn();
  fn();
}

runTwice(sayHi);
// → Hi!
// → Hi!
```

> ⚠️ `sayHi` passes the function itself.
> `sayHi()` calls it immediately and passes the *result*.

---

## Callbacks

A function passed into another function to be called later.

```javascript
function greetUser(name, callback) {
  console.log("Hi " + name + "!");
  callback(); // calling the passed-in function
}

greetUser("Alice", () => {
  console.log("Goodbye!");
});
// → Hi Alice!
// → Goodbye!
```

### Real-world example — `setTimeout`

```javascript
setTimeout(() => {
  console.log("Runs after 2 seconds!");
}, 2000);
```

---

## Array Methods Using Callbacks

These built-in methods use callbacks heavily — functions in action!

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// forEach — do something for each item
numbers.forEach(n => console.log(n));

// map — transform each item, return new array
const doubled = numbers.map(n => n * 2);
// → [2, 4, 6, 8, 10, 12]

// filter — keep items where callback returns true
const evens = numbers.filter(n => n % 2 === 0);
// → [2, 4, 6]
```

| Method    | Returns    | Use when                      |
|-----------|------------|-------------------------------|
| `forEach` | Nothing    | Do something per item         |
| `map`     | New array  | Transform every item          |
| `filter`  | New array  | Keep only matching items      |

---

## Full Cheatsheet

| Concept             | Syntax / Example                          |
|---------------------|-------------------------------------------|
| Define a function   | `function name() {}`                      |
| Call a function     | `name()`                                  |
| Parameters          | `function add(a, b) {}`                   |
| Return a value      | `return a + b;`                           |
| Arrow function      | `const add = (a, b) => a + b;`            |
| One-liner arrow     | `const double = n => n * 2;`              |
| No-param arrow      | `const sayHi = () => console.log("Hi!");` |
| Local scope         | Variable defined inside a function        |
| Global scope        | Variable defined outside all functions    |
| Callback            | `runTwice(() => console.log("Hello!"))`   |
| Pass function       | `runTwice(myFn)` — no `()` after name     |
