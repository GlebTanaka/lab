// 1. Property Shorthand
const name = 'Alex';
const age = 25;
const user = {
    name,    // same as name: name
    age      // same as age: age
};
console.log('Property Shorthand:', user);

// 2. Method Shorthand
const calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};
console.log('Method Shorthand - Addition:', calculator.add(5, 3));
console.log('Method Shorthand - Multiplication:', calculator.multiply(4, 2));

// 3. Computed Property Names
const propertyName = 'dynamicKey';
const value = 42;
const dynamicObject = {
    [propertyName]: value,
    [`computed${propertyName}`]: 'Hello'
};
console.log('Computed Properties:', dynamicObject);

// 4. Object Destructuring with Enhanced Literals
const serverConfig = {
    host: 'localhost',
    port: 3000,
    timeout: 5000
};

const {
    host: serverHost = 'default.com',
    port: serverPort = 8080
} = serverConfig;

const enhancedConfig = {
    serverHost,
    serverPort,
    isSecure: true
};
console.log('Enhanced Config:', enhancedConfig);

// 5. Spread Operator with Object Literals
const baseConfig = {
    version: '1.0',
    api: '/v1'
};

const extendedConfig = {
    ...baseConfig,
    environment: 'production',
    api: '/v2'  // overrides the api from baseConfig
};
console.log('Extended Config:', extendedConfig);

// 6. Dynamic Method Names
const actionType = 'click';
const handlers = {
    [`handle${actionType.charAt(0).toUpperCase()}${actionType.slice(1)}`]() {
        return 'Click handled';
    }
};
console.log('Dynamic Method Result:', handlers.handleClick());

// Example showing all features together
const getId = () => Math.random().toString(36).substr(2, 9);
const status = 'active';
const timestamp = Date.now();

const complexObject = {
    id: getId(),
    timestamp,
    [`status_${status}`]: true,
    process(data) {
        return `Processing ${data}...`;
    },
    ...baseConfig,
    metadata: {
        created: new Date().toISOString(),
        author: name
    }
};

console.log('Complex Object:', complexObject);
console.log('Process Result:', complexObject.process('test data'));