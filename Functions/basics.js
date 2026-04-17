/* Basic Function */ 

function greet (){
    console.log("Hello World!");
}

greet(); // This will call the function and print "Hello World!" to the console.


/* Function with Parameters */

function greetPerson(name){
    console.log("Hello, " + name + "!");
}

greetPerson("Alice"); // This will print "Hello, Alice!" to the console.
greetPerson("Bob");   // This will print "Hello, Bob!" to the console.

/* Function with Return Value */

function add(a, b){
    return a + b;
}

let sum = add(5, 3); // This will call the function and store the result (8) in the variable 'sum'.
console.log(sum); // This will print 8 to the console.

/* Function with Default Parameters */

function greetWithDefault(name = "Guest"){
    console.log("Hello, " + name + "!");
}   

greetWithDefault(); // This will print "Hello, Guest!" to the console.
greetWithDefault("Alice"); // This will print "Hello, Alice!" to the console.
