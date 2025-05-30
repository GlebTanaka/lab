// 1. Spreading arrays
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits, 'mango'];
console.log(moreFruits); // ['orange', 'apple', 'banana', 'mango']

// 2. Copying arrays
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // [1, 2, 3]

// 3. Combining arrays
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4]

// 4. Spreading objects
const person = { name: 'John', age: 30 };
const extendedPerson = {
    ...person,
    country: 'USA'
};
console.log(extendedPerson); // { name: 'John', age: 30, country: 'USA' }

// 5. Using spread with function arguments
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// 6. Spreading in function parameters (rest parameter)
function collectArgs(...args) {
    return args;
}
console.log(collectArgs(1, 2, 3, 4)); // [1, 2, 3, 4]

// 7. String to array conversion
const str = 'Hello';
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// 8. Combining objects with overriding properties
const defaults = { theme: 'light', fontSize: 12 };
const userPreferences = { theme: 'dark' };
const finalSettings = { ...defaults, ...userPreferences };
console.log(finalSettings); // { theme: 'dark', fontSize: 12 }