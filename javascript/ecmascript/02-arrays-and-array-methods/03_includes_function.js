// Creating arrays
const fruits = ['apple', 'banana', 'orange', 'mango'];
const numbers = [1, 2, 3, 4, 5];

// Using includes() to check if an element exists in an array
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false

// includes() is case-sensitive
console.log(fruits.includes('Apple')); // false
console.log(fruits.includes('apple')); // true

// Using includes() with numbers
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

// includes() with start index (second parameter)
console.log(fruits.includes('apple', 1)); // false - starts searching from index 1
console.log(fruits.includes('orange', 2)); // true - starts searching from index 2

// Practical examples
const userRoles = ['admin', 'editor', 'viewer'];

function checkUserAccess(role) {
    if (userRoles.includes(role)) {
        console.log('Access granted');
    } else {
        console.log('Access denied');
    }
}

checkUserAccess('admin'); // Access granted
checkUserAccess('guest'); // Access denied

// Using includes() for validation
const allowedFileTypes = ['.jpg', '.png', '.gif'];
const fileName = 'profile.jpg';

const isValidFile = allowedFileTypes.includes(fileName.slice(fileName.lastIndexOf('.')));
console.log(isValidFile); // true

// Using includes() with strings (strings are array-like)
const str = 'Hello World';
console.log(Array.from(str).includes('H')); // true