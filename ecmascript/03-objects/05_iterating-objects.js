// 1. Object methods examples
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Using Object.keys()
for (const key of Object.keys(person)) {
    console.log(key); // 'name', 'age', 'city'
}

// Using Object.values()
for (const value of Object.values(person)) {
    console.log(value); // 'John', 30, 'New York'
}

// Using Object.entries()
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`); // 'name: John', 'age: 30', 'city: New York'
}

// 2. Array methods examples
const fruits = ['apple', 'banana', 'orange'];

// Using array.keys()
for (const index of fruits.keys()) {
    console.log(index); // 0, 1, 2
}

// Using array.values()
for (const value of fruits.values()) {
    console.log(value); // 'apple', 'banana', 'orange'
}

// Using array.entries()
for (const [index, value] of fruits.entries()) {
    console.log(`${index}: ${value}`); // '0: apple', '1: banana', '2: orange'
}

// 3. Map methods examples
const userMap = new Map([
    ['user1', { name: 'Alice', age: 25 }],
    ['user2', { name: 'Bob', age: 30 }],
    ['user3', { name: 'Charlie', age: 35 }]
]);

// Using map.keys()
for (const key of userMap.keys()) {
    console.log(key); // 'user1', 'user2', 'user3'
}

// Using map.values()
for (const value of userMap.values()) {
    console.log(value); // {name: 'Alice', age: 25}, etc.
}

// Using map.entries()
for (const [key, value] of userMap.entries()) {
    console.log(`${key} -> ${value.name}`); // 'user1 -> Alice', etc.
}

// 4. Set methods examples
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

// Using set.keys() (same as values() for Set)
for (const key of uniqueNumbers.keys()) {
    console.log(key); // 1, 2, 3, 4, 5
}

// Using set.values()
for (const value of uniqueNumbers.values()) {
    console.log(value); // 1, 2, 3, 4, 5
}

// Using set.entries() (returns [value, value] pairs for Set)
for (const [key, value] of uniqueNumbers.entries()) {
    console.log(`${key} -> ${value}`); // '1 -> 1', '2 -> 2', etc.
}

// 5. Practical example: Combining methods
const inventory = {
    apple: 5,
    banana: 8,
    orange: 12
};

// Calculate total items
const totalItems = Object.values(inventory).reduce((sum, count) => sum + count, 0);
console.log(`Total items: ${totalItems}`); // Total items: 25

// Find items low in stock (less than 10)
const lowStock = Object.entries(inventory)
    .filter(([_, count]) => count < 10)
    .map(([item]) => item);
console.log(`Low stock items: ${lowStock}`); // Low stock items: apple,banana

// Create a formatted inventory list
const inventoryList = Object.entries(inventory)
    .map(([item, count]) => `${item}: ${count} units`)
    .join('\n');
console.log(inventoryList);
// Output:
// apple: 5 units
// banana: 8 units
// orange: 12 units