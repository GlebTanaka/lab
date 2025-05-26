// Basic template string usage
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

// Multi-line strings
const multiLine = `
  This is a multi-line
  template string.
  No special characters needed!
`;
console.log(multiLine);

// Expressions in template strings
const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`); // Output: Sum: 15
console.log(`${a} times ${b} equals ${a * b}`); // Output: 5 times 10 equals 50

// Using template strings with functions
const getPrice = (quantity, price) => quantity * price;
const quantity = 3;
const price = 9.99;
console.log(`Total price: $${getPrice(quantity, price).toFixed(2)}`);
// Output: Total price: $29.97

// Nesting template strings
const item = 'book';
const message = `You ordered ${quantity} ${item}${quantity > 1 ? 's' : ''} for $${price} each`;
console.log(message); // Output: You ordered 3 books for $9.99 each

// Tagged template literals
function highlight(strings, ...values) {
    let result = '';
    strings.forEach((string, i) => {
        result += string;
        if (i < values.length) {
            result += `**${values[i]}**`;
        }
    });
    return result;
}

const product = 'laptop';
const cost = 999;
console.log(highlight`The ${product} costs $${cost}`);
// Output: The **laptop** costs $**999**