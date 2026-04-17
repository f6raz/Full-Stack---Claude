function makeGreeting() {
  let message = "Hello!"; // only lives inside here
  console.log(message); // → Hello!
}

makeGreeting();
console.log(message); // ❌ Error! message is not defined

//------------

let username = "Alice"; // global variable

function greet() {
  console.log("Hello, " + username); // ✅ can access it
}

greet(); // → Hello, Alice

//------------

let city = "London"; // global

function showLocation() {
  let building = "Big Ben"; // local
  console.log(city); // ✅ can see outside
  console.log(building); // ✅ can see inside
}

showLocation();
console.log(city); // ✅ global, accessible
console.log(building); // ❌ Error! local, not accessible

//------------

function calcTax() {
  let rate = 0.2; // only used here
}

function calcDiscount() {
  let rate = 0.1; // completely separate, no conflict!
}