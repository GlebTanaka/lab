const spacePeople = () => {
    return fetch("http://api.open-notify.org/astros.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
};

// Test the function
spacePeople()
    .then(data => console.log('People in space:', data))
    .catch(error => console.error('Error:', error));

