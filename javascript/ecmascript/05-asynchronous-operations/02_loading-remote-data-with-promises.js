const https = require('http');

const spacePeople = () => {
    return new Promise((resolve, reject) => {
        const api = "http://api.open-notify.org/astros.json";

        https.get(api, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

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