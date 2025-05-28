// 1. Basic Map Operations
const userMap = new Map();

// Setting values
userMap.set('john', { id: 1, email: 'john@example.com' });
userMap.set('jane', { id: 2, email: 'jane@example.com' });

// Getting values
console.log(userMap.get('john'));  // Output: { id: 1, email: 'john@example.com' }
console.log(userMap.has('jane'));  // Output: true
console.log(userMap.size);         // Output: 2

// 2. Creating a Map with initial values
const initialEntries = [
    ['apple', 1.99],
    ['banana', 0.99],
    ['orange', 1.49]
];
const fruitPrices = new Map(initialEntries);

// 3. Using objects as keys (not possible with regular objects)
const userObj1 = { id: 1 };
const userObj2 = { id: 2 };

const userScores = new Map();
userScores.set(userObj1, 100);
userScores.set(userObj2, 200);

console.log(userScores.get(userObj1)); // Output: 100

// 4. Iteration examples
const inventory = new Map([
    ['laptop', { price: 999, stock: 50 }],
    ['phone', { price: 699, stock: 100 }],
    ['tablet', { price: 399, stock: 75 }]
]);

// Iterating over keys
for (const product of inventory.keys()) {
    console.log(product);
}

// Iterating over values
for (const details of inventory.values()) {
    console.log(details);
}

// Iterating over entries
for (const [product, details] of inventory.entries()) {
    console.log(`${product}: $${details.price}`);
}

// Using forEach
inventory.forEach((details, product) => {
    console.log(`${product} - ${details.stock} in stock`);
});

// 5. Practical example: Cache with timeout
class TimeoutCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, timeoutMs) {
        const expiryTime = Date.now() + timeoutMs;
        this.cache.set(key, {
            value,
            expiryTime
        });

        // Automatically remove after timeout
        setTimeout(() => {
            this.cache.delete(key);
        }, timeoutMs);
    }

    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        if (Date.now() > item.expiryTime) {
            this.cache.delete(key);
            return null;
        }
        return item.value;
    }
}

const cache = new TimeoutCache();
cache.set('apiData', { result: 'some data' }, 5000); // Expires after 5 seconds

// 6. Using Map for a simple event bus
class EventBus {
    constructor() {
        this.listeners = new Map();
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(callback);
    }

    emit(event, data) {
        if (this.listeners.has(event)) {
            for (const callback of this.listeners.get(event)) {
                callback(data);
            }
        }
    }

    off(event, callback) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).delete(callback);
        }
    }
}

// Usage of EventBus
const eventBus = new EventBus();
eventBus.on('userLoggedIn', (user) => {
    console.log(`User logged in: ${user}`);
});

// 7. Map operations example
const userRoles = new Map([
    ['admin', ['read', 'write', 'delete']],
    ['editor', ['read', 'write']],
    ['viewer', ['read']]
]);

// Converting Map to array
const rolesArray = Array.from(userRoles);
const roleKeys = Array.from(userRoles.keys());
const roleValues = Array.from(userRoles.values());

// Clearing and deleting
userRoles.delete('viewer');    // Remove single entry
userRoles.clear();            // Remove all entries