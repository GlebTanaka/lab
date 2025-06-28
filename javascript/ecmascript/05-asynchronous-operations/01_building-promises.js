// 1. Basic Promise Creation and Usage
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Success! Number: ${randomNumber}`);
        } else {
            reject(`Failed! Number too low: ${randomNumber}`);
        }
    }, 1000);
});

simplePromise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// 2. Promise Chaining
const fetchUserData = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: 'John Doe' });
        }, 1000);
    });
};

const getUserPosts = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: user,
                posts: [
                    { id: 1, title: 'Post 1' },
                    { id: 2, title: 'Post 2' }
                ]
            });
        }, 1000);
    });
};

fetchUserData(1)
    .then(user => getUserPosts(user))
    .then(result => console.log('User and posts:', result))
    .catch(error => console.error(error));

// 3. Promise.all() - Running Multiple Promises in Parallel
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
    .then(values => console.log('All promises resolved:', values))
    .catch(error => console.error('One promise failed:', error));

// 4. async/await syntax (Modern way to handle promises)
async function fetchUserDataAndPosts(userId) {
    try {
        const user = await fetchUserData(userId);
        const userWithPosts = await getUserPosts(user);
        console.log('User data with posts:', userWithPosts);
        return userWithPosts;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// 5. Promise.race() - Getting the First Resolved Promise
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000));
const fastPromise = new Promise(resolve => setTimeout(() => resolve('Fast'), 1000));

Promise.race([slowPromise, fastPromise])
    .then(result => console.log('First to finish:', result));

// Using all examples
fetchUserDataAndPosts(1)
    .then(() => console.log('Completed user data fetch'))
    .catch(error => console.error('Error:', error));