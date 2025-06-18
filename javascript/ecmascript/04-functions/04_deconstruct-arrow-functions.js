// Starting with a regular function with multiple lines
function processUser(user) {
    const name = user.name.toUpperCase();
    const age = user.age;
    return {
        displayName: name,
        yearOfBirth: new Date().getFullYear() - age
    };
}

// Step 1: Convert to function expression
const processUser = function(user) {
    const name = user.name.toUpperCase();
    const age = user.age;
    return {
        displayName: name,
        yearOfBirth: new Date().getFullYear() - age
    };
}

// Step 2: Convert to arrow function
const processUser = (user) => {
    const name = user.name.toUpperCase();
    const age = user.age;
    return {
        displayName: name,
        yearOfBirth: new Date().getFullYear() - age
    };
}

// Note: In this case, we can't simplify further because we have multiple lines

// Starting with a regular function
function greetUser(name) {
    return `Hello, ${name}!`;
}

// Step 1: Function expression
const greetUser = function(name) {
    return `Hello, ${name}!`;
}

// Step 2: Arrow function
const greetUser = (name) => {
    return `Hello, ${name}!`;
}

// Step 3: Remove braces and 'return' for single line
const greetUser = (name) => `Hello, ${name}!`;

// Step 4: Remove parentheses (only possible with single parameter)
const greetUser = name => `Hello, ${name}!`;