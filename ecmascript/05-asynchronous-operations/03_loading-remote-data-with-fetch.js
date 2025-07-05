// using fetch
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

// using async await
const getSpacePeople = async () => {
    try {
        const response = await fetch("http://api.open-notify.org/astros.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

// Test the function
const init = async () => {
    try {
        const data = await getSpacePeople();
        console.log('People in space:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

init();