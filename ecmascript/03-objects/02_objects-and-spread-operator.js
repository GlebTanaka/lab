// Basic object spread examples
const user = {
    name: 'John',
    age: 30
};

const userWithRole = {
    ...user,
    role: 'admin'
};
console.log('User with added role:', userWithRole);

// Merging multiple objects
const address = {
    street: '123 Main St',
    city: 'Boston'
};

const contact = {
    email: 'john@example.com',
    phone: '555-0123'
};

const completeProfile = {
    ...user,
    ...address,
    ...contact
};
console.log('Complete profile:', completeProfile);

// Overriding properties
const defaultSettings = {
    theme: 'light',
    fontSize: 12,
    showSidebar: true
};

const userSettings = {
    theme: 'dark',
    fontSize: 14
};

const finalSettings = {
    ...defaultSettings,   // Base settings
    ...userSettings      // Override with user preferences
};
console.log('Final settings:', finalSettings);

// Creating copies with modifications
const product = {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    stock: 5
};

const discountedProduct = {
    ...product,
    price: product.price * 0.9,  // 10% discount
    onSale: true
};
console.log('Original product:', product);
console.log('Discounted product:', discountedProduct);

// Nested object spread
const baseConfig = {
    api: {
        endpoint: 'api.example.com',
        version: 'v1'
    },
    timeout: 5000
};

const developmentConfig = {
    ...baseConfig,
    api: {
        ...baseConfig.api,
        endpoint: 'dev-api.example.com'  // Only override endpoint
    },
    debug: true
};
console.log('Development config:', developmentConfig);

// Combining arrays and objects
const tags = ['javascript', 'web'];
const metadata = {
    created: new Date(),
    author: 'John'
};

const blogPost = {
    title: 'Spread Operator in JS',
    ...metadata,
    tags: [...tags, 'programming'],
    likes: 0
};
console.log('Blog post:', blogPost);