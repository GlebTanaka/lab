// 01_variables-let-const.js

let name = "Grape";
const language = "JavaScript";

console.log(`Hello, ${name}! Welcome to ${language}.`);

// Trying to change const (should cause error)
try {
    language = "ECMAScript";
} catch (e) {
    console.log("❌ Error:", e.message);
}

// Block Scope with let
let score = 50;
{
    let score = 100;  // Different variable, only exists in this block
    console.log('Score inside block:', score);  // Output: 100
}
console.log('Score outside block:', score);  // Output: 50

// Variable reassignment with let
let counter = 0;
counter++;  // Valid
counter = 10;  // Valid
console.log('Counter:', counter);

// const with objects and arrays
const user = {
    name: 'John',
    age: 30
};
user.age = 31;  // Valid - modifying property is allowed
console.log('Modified user:', user);

// But you can't reassign the entire object
try {
    user = { name: 'Jane' };  // This will throw an error
} catch (e) {
    console.log('Cannot reassign const object:', e.message);
}

// const with arrays
const numbers = [1, 2, 3];
numbers.push(4);  // Valid - modifying array is allowed
console.log('Modified array:', numbers);

try {
    numbers = [5, 6, 7];  // This will throw an error
} catch (e) {
    console.log('Cannot reassign const array:', e.message);
}

// let in loops
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log('Loop value:', i), 100);
}

// Temporal Dead Zone (TDZ) demonstration
try {
    console.log(tdzVariable);  // This will throw an error
    let tdzVariable = "Hello";
} catch (e) {
    console.log('TDZ Error:', e.message);
}

// const for values that should never change
const PI = 3.14159;
const API_URL = 'https://api.example.com';
const DAYS_IN_WEEK = 7;

// Using let for values that need to change
let currentTemperature = 22;
let userLoggedIn = false;
let lastLoginDate = new Date();
