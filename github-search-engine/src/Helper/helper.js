
export const getUserData = async (userName) => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.github.com/users/' + userName + '?client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c';
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
    });
};

export const getUserRepo = async (userName) => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.github.com/users/' + userName + '/repos?client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c';
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
    });
};

export const getRepoData = async (repoName) => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.github.com/search/repositories?q=' + repoName + '&client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c';
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
    });

};