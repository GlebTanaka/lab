// 1. Basic Symbol usage to create unique property keys
const nameSymbol = Symbol('name');
const ageSymbol = Symbol('name'); // Even with same description, Symbols are unique

const person = {
    [nameSymbol]: 'John',
    [ageSymbol]: 30
};

console.log(person[nameSymbol]); // Output: 'John'
console.log(nameSymbol === ageSymbol); // Output: false

// 2. Preventing naming conflicts in objects
const library1PropertyName = Symbol('title');
const library2PropertyName = Symbol('title');

const book = {
    [library1PropertyName]: 'Clean Code',    // Library 1's title property
    [library2PropertyName]: 'Clean Code v2', // Library 2's title property
    // Both libraries can use 'title' without conflict
};

// 3. Using Symbols for private-like properties
const privateProperty = Symbol('privateData');

class MyClass {
    constructor() {
        this[privateProperty] = 'Secret data';
        this.publicProperty = 'Public data';
    }

    getPrivateData() {
        return this[privateProperty];
    }
}

const instance = new MyClass();
console.log(instance.publicProperty);    // Output: 'Public data'
console.log(instance[privateProperty]);  // Output: 'Secret data'
console.log(Object.keys(instance));      // Output: ['publicProperty'] (Symbol is not listed)

// 4. Using Symbol.for() for shared Symbols
const sharedSymbol = Symbol.for('sharedKey');
const sameSymbol = Symbol.for('sharedKey');

console.log(sharedSymbol === sameSymbol); // Output: true

// 5. Real-world example: Plugin system
const pluginSymbol = Symbol('plugin');

class Application {
    constructor() {
        this.plugins = {};
    }

    registerPlugin(name, plugin) {
        // Each plugin gets its own unique symbol
        const pluginKey = Symbol(`plugin_${name}`);
        this.plugins[pluginKey] = plugin;
    }

    getPlugin(pluginKey) {
        return this.plugins[pluginKey];
    }
}

// Different plugin developers can register their plugins
const app = new Application();

const analyticsPlugin = {
    name: 'Analytics',
    track: () => console.log('Tracking...')
};

const loggingPlugin = {
    name: 'Logging',
    log: () => console.log('Logging...')
};

app.registerPlugin('analytics', analyticsPlugin);
app.registerPlugin('logging', loggingPlugin);

// 6. Using built-in Symbols for customizing object behavior
const customObject = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 42;
        }
        if (hint === 'string') {
            return 'Custom string representation';
        }
        return null;
    }
};

console.log(+customObject);    // Output: 42
console.log(`${customObject}`); // Output: 'Custom string representation'