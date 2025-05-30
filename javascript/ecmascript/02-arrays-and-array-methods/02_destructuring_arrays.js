// 1. Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first, second, third); // 1, 2, 3

// 2. Skipping elements using commas
const colors = ['red', 'green', 'blue', 'yellow'];
const [, , thirdColor] = colors;
console.log(thirdColor); // 'blue'

// 3. Rest pattern in destructuring
const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
const [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log(firstFruit); // 'apple'
console.log(secondFruit); // 'banana'
console.log(remainingFruits); // ['orange', 'mango', 'kiwi']

// 4. Default values
const [a, b, c = 'default'] = ['value1', 'value2'];
console.log(c); // 'default'

// 5. Swapping variables
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

// 6. Nested array destructuring
const nested = [1, [2, 3], 4];
const [first1, [second1, second2], fourth] = nested;
console.log(first1, second1, second2, fourth); // 1, 2, 3, 4

// 7. Combining with functions
function getCoordinates() {
    return [10, 20];
}
const [x1, y1] = getCoordinates();
console.log(x1, y1); // 10, 20

// 8. Ignoring returned values
function getValues() {
    return [1, 2, 3, 4, 5];
}
const [value1, , , value4] = getValues();
console.log(value1, value4); // 1, 4

// 9. Using with iterables (like String)
const [char1, char2, ...rest] = "Hello";
console.log(char1); // "H"
console.log(char2); // "e"
console.log(rest);  // ["l", "l", "o"]

// 10. Destructuring with array methods
const entries = [['name', 'John'], ['age', 30]];
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30