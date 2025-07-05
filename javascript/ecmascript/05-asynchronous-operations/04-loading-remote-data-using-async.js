// Simulating an API that fetches a user's data
const fetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: 'John Doe',
                    email: 'john@example.com'
                });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
};

// Using async/await to handle the Promise
async function getUser(userId) {
    try {
        console.log('Fetching user data...');
        const user = await fetchUserData(userId);
        console.log('User found:', user);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error;
    }
}

// Testing with valid and invalid IDs
console.log('Starting...');

// Success case
getUser(123)
    .then(user => console.log('Success case completed'));

// Error case
getUser(-1)
    .then(user => console.log('This won\'t execute'))
    .catch(error => console.log('Error case handled'));

