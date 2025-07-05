const fetchGithubUser = async (username) => {
    try {
        // Make the GET request to GitHub API
        const response = await fetch(`https://api.github.com/users/${username}`);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }

        // Parse the JSON response
        const userData = await response.json();

        // Extract and return relevant information
        return {
            name: userData.name,
            bio: userData.bio,
            publicRepos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            profileUrl: userData.html_url
        };
    } catch (error) {
        throw new Error(`Failed to fetch user data: ${error.message}`);
    }
};

// Use the function
const init = async () => {
    try {
        console.log('Fetching GitHub user data...');
        const userData = await fetchGithubUser('glebtanaka');
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

init();