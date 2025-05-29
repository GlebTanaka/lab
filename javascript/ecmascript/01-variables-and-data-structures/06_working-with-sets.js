// Creating a Set
const fruits = new Set();

// Adding elements to a Set
fruits.add('apple');
fruits.add('banana');
fruits.add('orange');

// Sets only store unique values - duplicates are ignored
fruits.add('apple'); // Set still contains only one 'apple'

console.log(fruits); // Set(3) { 'apple', 'banana', 'orange' }

// Creating a Set from an array
const numbers = new Set([1, 2, 3, 2, 1]); // Duplicates are automatically removed
console.log(numbers); // Set(3) { 1, 2, 3 }

// Checking if an element exists
console.log(fruits.has('apple')); // true
console.log(fruits.has('grape')); // false

// Getting Set size
console.log(fruits.size); // 3

// Deleting elements
fruits.delete('banana');
console.log(fruits); // Set(2) { 'apple', 'orange' }

// Iterating over a Set
fruits.forEach(fruit => {
    console.log(fruit);
});

// Converting Set to Array
const fruitsArray = Array.from(fruits);
// or
const fruitsArray2 = [...fruits];

// Clearing all elements
fruits.clear();
console.log(fruits); // Set(0) {}

// Set operations
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log(union); // Set(6) { 1, 2, 3, 4, 5, 6 }

// Intersection
const intersection = new Set(
    [...setA].filter(x => setB.has(x))
);
console.log(intersection); // Set(2) { 3, 4 }

// Difference
const difference = new Set(
    [...setA].filter(x => !setB.has(x))
);
console.log(difference); // Set(2) { 1, 2 }

// Using Set for removing duplicates from array
const arrayWithDuplicates = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]