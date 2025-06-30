// API fetching function using Promise
const fetchUserDataWithPromise = (userId) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.example.com/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

// API fetching function using async/await
const fetchUserDataWithAsync = async (userId) => {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

// Example usage with Promise-based approach
console.log('Fetching user data with Promise...');
fetchUserDataWithPromise(123)
    .then(userData => {
        console.log('User data (Promise):', userData);
    })
    .catch(error => {
        console.error('Error fetching user data (Promise):', error);
    });

// Example usage with async/await approach
async function main() {
    try {
        console.log('Fetching user data with async/await...');
        const userData = await fetchUserDataWithAsync(123);
        console.log('User data (async/await):', userData);
    } catch (error) {
        console.error('Error fetching user data (async/await):', error);
    }
}

// Run the async example
main();

// Export the functions if using modules
module.exports = {
    fetchUserDataWithPromise,
    fetchUserDataWithAsync
};

