// Stack Memory

// The stack stores primitive data types and function execution contexts.

// Primitive Data Types
// Number
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// When you assign one primitive variable to another, JavaScript copies the actual value.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20




//heap Memory

// The heap stores non-primitive (reference) types.

// These include:

// Objects
// Arrays
// Functions
// Dates
// Maps
// Sets

// Variables on the stack store a reference (memory address) to the object in the heap.

let user1 = {
    name: "Aryan",
    age: 21
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul

//                        Quick Comparison
//     Stack Memory                                 	Heap Memory
// Stores primitive values	                      Stores objects and arrays
// Faster access	                              Slightly slower
// Fixed-size allocation	                      Dynamic allocation
// Copies actual values                           Copies references
// Automatically managed for execution contexts	  Managed by JavaScript's garbage collector