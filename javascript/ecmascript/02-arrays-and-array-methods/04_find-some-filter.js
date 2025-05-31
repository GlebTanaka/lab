const users = [
    { id: 1, name: 'John', age: 25, role: 'admin' },
    { id: 2, name: 'Jane', age: 30, role: 'user' },
    { id: 3, name: 'Bob', age: 25, role: 'user' },
    { id: 4, name: 'Alice', age: 35, role: 'admin' }
];

// 1. Finding users
// ---------------

// includes() - only works for primitive values
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true

// find() - returns the first matching element or undefined
const findAdmin = users.find(user => user.role === 'admin');
console.log(findAdmin); // { id: 1, name: 'John', age: 25, role: 'admin' }

// some() - returns true if any element matches (stops searching after finding one)
const hasAdmin = users.some(user => user.role === 'admin');
console.log(hasAdmin); // true

// filter() - returns array with all matching elements
const allAdmins = users.filter(user => user.role === 'admin');
console.log(allAdmins);
// [
//   { id: 1, name: 'John', age: 25, role: 'admin' },
//   { id: 4, name: 'Alice', age: 35, role: 'admin' }
// ]

// 2. More Complex Examples
// ----------------------

// find() - Finding first user over 30
const firstOver30 = users.find(user => user.age > 30);
console.log(firstOver30); // { id: 4, name: 'Alice', age: 35, role: 'admin' }

// some() - Checking if any user is under 20
const hasYoungUsers = users.some(user => user.age < 20);
console.log(hasYoungUsers); // false

// filter() - Getting all users aged 25
const age25Users = users.filter(user => user.age === 25);
console.log(age25Users);
// [
//   { id: 1, name: 'John', age: 25, role: 'admin' },
//   { id: 3, name: 'Bob', age: 25, role: 'user' }
// ]

// 3. Practical Use Cases
// --------------------

// find() - User authentication
function login(username, role) {
    const user = users.find(u => u.name === username && u.role === role);
    return user ? 'Login successful' : 'Access denied';
}
console.log(login('John', 'admin')); // Login successful
console.log(login('John', 'user')); // Access denied

// some() - Permission checking
function hasPermission(userId, requiredRole) {
    return users.some(user => user.id === userId && user.role === requiredRole);
}
console.log(hasPermission(1, 'admin')); // true
console.log(hasPermission(2, 'admin')); // false

// filter() - Search functionality
function searchUsers(query) {
    return users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.role.toLowerCase().includes(query.toLowerCase())
    );
}
console.log(searchUsers('admin'));
// [
//   { id: 1, name: 'John', age: 25, role: 'admin' },
//   { id: 4, name: 'Alice', age: 35, role: 'admin' }
// ]

// 4. Combining Methods
// ------------------

// Finding the first admin over 30
const seniorAdmin = users
    .filter(user => user.role === 'admin')
    .find(admin => admin.age > 30);
console.log(seniorAdmin); // { id: 4, name: 'Alice', age: 35, role: 'admin' }

// Checking if all admins are over 20
const allAdminsOver20 = users
    .filter(user => user.role === 'admin')
    .every(admin => admin.age > 20);
console.log(allAdminsOver20); // true