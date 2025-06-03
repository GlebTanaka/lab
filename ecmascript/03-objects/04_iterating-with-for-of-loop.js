// 1. Basic Array Example
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}

// 2. String Example (strings are iterable)
const message = 'Hello';
for (const char of message) {
    console.log(char);
}

// 3. Set Example
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
for (const number of uniqueNumbers) {
    console.log(number); // Will print 1, 2, 3 (no duplicates)
}

// 4. Map Example
const userAges = new Map([
    ['John', 25],
    ['Alice', 30],
    ['Bob', 35]
]);
for (const [name, age] of userAges) {
    console.log(`${name} is ${age} years old`);
}

// 5. Custom Iterable Object Example
const numberRange = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        return {
            current: this.start,
            last: this.end,
            next() {
                if (this.current <= this.last) {
                    return { value: this.current++, done: false };
                }
                return { done: true };
            }
        };
    }
};

for (const num of numberRange) {
    console.log(num); // Will print 1, 2, 3, 4, 5
}

// 6. Generator Function Example
function* fibonacci(n) {
    let prev = 0, curr = 1;
    for(let i = 0; i < n; i++) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

for (const num of fibonacci(6)) {
    console.log(num); // Will print 1, 1, 2, 3, 5, 8
}

// 7. TypedArray Example
const int32Array = new Int32Array([10, 20, 30, 40]);
for (const num of int32Array) {
    console.log(num);
}

// 8. NodeList Example (DOM elements)
// Assuming we have multiple paragraphs in HTML
const paragraphs = document.querySelectorAll('p');
for (const paragraph of paragraphs) {
    paragraph.style.color = 'blue';
}