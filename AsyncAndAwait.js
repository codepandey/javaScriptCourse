
// example of Async and await function


    console.log('Before');

    // getUser(1)
    //     .then(user => getRepositroies(user.gitHubUsername))
    //     .then(repos => getCommits(repos[0]))
    //     .then(commits => console.log('Commits', commits))
    //     .catch(err => console.log('Error', err.message));



    // async function with catch error


    // async function displayCommits() {
    //     const user = await getUser(1);
    //     const repos = await getRepositroies(user.gitHubUsername);
    //     const commits =  await getCommits(repos[0]);
    //     console.log(commits);
    // }
    // displayCommits();

// async funtion with catch error with try and catch block
    async function displayCommits() {
        try {
            const user = await getUser(1);
            const repos = await getRepositroies(user.gitHubUsername);
            const commits =  await getCommits(repos[0]);
            console.log(commits);
        }
        catch(error) {
            console.log('Error', error.message);
        }        
    }
    displayCommits();

    function getUser(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Hii reading user from database');
                resolve({ id :id, gitHubUsername: 'Mosh'});       
            }, 2000);
        });      
    }

    function getRepositroies(username) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Calling Github Api...');
                //resolve(['repo1', 'repo2', 'repo3']);
                // using reject for trying to show erro with try and catch block
                reject (new Error('Can not get Repos'));
            }, 2000)
        });    
    }


    function getCommits(repo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Calling Github Api...');
                resolve(['commits']);
            }, 2000)
        })
    }