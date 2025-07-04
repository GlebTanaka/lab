// This example shows how to make HTTP requests in Node.js without browser APIs like XMLHttpRequest
// Instead, we use the built-in 'http' module which is specific to Node.js
const https = require('http');

const spacePeople = () => {
    return new Promise((resolve, reject) => {
        const api = "http://api.open-notify.org/astros.json";

        // Use http.get() instead of XMLHttpRequest
        // Node.js handles the request in chunks of data through event listeners
        https.get(api, (response) => {
            let data = '';

            // The 'data' event fires when a chunk of data is received
            response.on('data', (chunk) => {
                data += chunk;
            });

            // The 'end' event fires when all data has been received
            response.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (error) {
                    reject(new Error('Error parsing response'));
                }
            });
        }).on('error', (error) => {
            reject(new Error(`Network error: ${error.message}`));
        });
    });
};

// Test the function
spacePeople()
    .then(data => console.log('People in space:', data))
    .catch(error => console.error('Error:', error));