// Basic default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());         // "Hello, Guest!"
console.log(greet("John"));   // "Hello, John!"

// Multiple default parameters
function createUser(username = "anonymous", age = 18, isAdmin = false) {
    return {
        username,
        age,
        isAdmin
    };
}

console.log(createUser());                    // {username: "anonymous", age: 18, isAdmin: false}
console.log(createUser("john_doe", 25));      // {username: "john_doe", age: 25, isAdmin: false}

// Using expressions as default values
function getTime(timestamp = Date.now()) {
    return new Date(timestamp);
}

console.log(getTime());       // current date/time
console.log(getTime(0));      // "Thu Jan 01 1970 00:00:00"

// Using previous parameters in default values
function multiply(a, b = a) {
    return a * b;
}

console.log(multiply(5));     // 25 (5 * 5)
console.log(multiply(5, 3));  // 15 (5 * 3)

// Default parameters with destructuring
function processConfig({
                           port = 3000,
                           host = 'localhost',
                           protocol = 'http'
                       } = {}) {
    return `${protocol}://${host}:${port}`;
}

console.log(processConfig());                         // "http://localhost:3000"
console.log(processConfig({ port: 8080 }));          // "http://localhost:8080"
console.log(processConfig({ host: 'example.com' }));  // "http://example.com:3000"

// Default parameters with array destructuring
function createRange([start = 0, end = 10, step = 1] = []) {
    const result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

console.log(createRange());           // [0,1,2,3,4,5,6,7,8,9,10]
console.log(createRange([5]));        // [5,6,7,8,9,10]
console.log(createRange([1, 6, 2]));  // [1,3,5]