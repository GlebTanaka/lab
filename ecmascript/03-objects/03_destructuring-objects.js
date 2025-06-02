// Basic object destructuring
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com'
};

const { firstName, lastName } = user;
console.log('Basic destructuring:', firstName, lastName);

// Assigning to different variable names
const { firstName: fName, lastName: lName } = user;
console.log('Renamed variables:', fName, lName);

// Default values
const settings = {
    theme: 'dark'
};

const { theme, fontSize = 16, language = 'en' } = settings;
console.log('With defaults:', theme, fontSize, language);

// Nested object destructuring
const employee = {
    id: 123,
    name: 'Alice Smith',
    department: {
        id: 'DEV',
        name: 'Development',
        location: {
            building: 'A',
            floor: 3
        }
    }
};

const {
    name: employeeName,
    department: {
        name: deptName,
        location: { floor }
    }
} = employee;
console.log('Nested destructuring:', employeeName, deptName, floor);

// Combining with rest operator
const product = {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    category: 'Electronics',
    manufacturer: 'TechCorp',
    inStock: true
};

const { id, name, ...productDetails } = product;
console.log('Rest operator:', id, name, productDetails);

// Destructuring in function parameters
function printUserInfo({
                           firstName,
                           lastName,
                           address: { city = 'Unknown City', country = 'Unknown' } = {}
                       }) {
    console.log(`${firstName} ${lastName} from ${city}, ${country}`);
}

const userWithAddress = {
    firstName: 'Jane',
    lastName: 'Smith',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

printUserInfo(userWithAddress);
printUserInfo({ firstName: 'Bob', lastName: 'Johnson' }); // Uses default address

// Destructuring with arrays and objects
const response = {
    status: 200,
    data: {
        items: ['item1', 'item2'],
        metadata: {
            total: 2,
            page: 1
        }
    }
};

const {
    status,
    data: {
        items: [firstItem],
        metadata: { total }
    }
} = response;
console.log('Mixed destructuring:', status, firstItem, total);

// Conditional destructuring with try-catch
function safelyDestructure(obj) {
    try {
        const { required: { nested: { value } } } = obj;
        return value;
    } catch (error) {
        return 'Not available';
    }
}

console.log('Safe destructuring 1:', safelyDestructure({ required: { nested: { value: 42 } } }));
console.log('Safe destructuring 2:', safelyDestructure({}));

// Dynamic property names
const key = 'name';
const { [key]: dynamicValue } = user;
console.log('Dynamic key destructuring:', dynamicValue);