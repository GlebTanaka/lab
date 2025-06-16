// Basic arrow function
const greet = () => {
    return "Hello!";
};

// Arrow function with one parameter (parentheses optional)
const square = x => x * x;

// Arrow function with multiple parameters
const add = (a, b) => a + b;

// Arrow function with implicit return (one-liner)
const multiply = (a, b) => a * b;

// Arrow function with object literal return
const createPerson = (name, age) => ({ name: name, age: age });

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Arrow function in callbacks
setTimeout(() => {
    console.log("This runs after 1 second");
}, 1000);

// Arrow functions with array methods chaining
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];

const youngNames = users
    .filter(user => user.age < 30)
    .map(user => user.name);

// Using arrow functions with Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
};